/*
 * Go web-app that calculates factorization of given (or random) integers.
 *
 * Usage Examples:
 *   http://localhost:80/factorize
 *   http://localhost:80/factorize?number=2525
 */

package main

import (
	"container/list"
	"encoding/json"
	"fmt"
	"math"
	"math/rand/v2"
	"net/http"
	"strconv"
)

// cache used to store the already calculated factorizations
var cache map[uint64]*list.List = make(map[uint64]*list.List)

// Finds a factorization (list of prime numbers whose multiplication makes up the original number) of a given integer.
func factorizeNumber(num uint64) *list.List {
	fmt.Printf("Calculating number %d factorization:\n", num)

	// Container for the found factors
	var factors *list.List = list.New()

	// When looking for integer factors, there's no sense to consider factors larger than sqrt of the number
	var max_factor uint64 = uint64(math.Sqrt(float64(num)))

	var factor_candidate uint64 // Factor candidates iterator
	for factor_candidate = 2; factor_candidate <= max_factor; factor_candidate++ {

		// If factor candidate divides the number evenly, we found a true factor
		if num%factor_candidate == 0 {
			// Save the factor
			factors.PushBack(factor_candidate)

			// As we found a factor, we only need to look for factors of the remainder of the number
			num = num / factor_candidate
			// max_factor should also be reduced as the number is smaller now
			max_factor = uint64(math.Sqrt(float64(num)))

			// Decrement the candidate so it will be considered again during next iteration
			// In case, when the same factor used multiple times to make up the number
			factor_candidate--
		}
	}

	// Check if the remaining number is larger than one, in which case it's the last (largest) factor.
	if num != 1 {
		fmt.Printf("Last factor: %d\n", num)
		factors.PushBack(num)
	}

	return factors
}

// HTTP request handler for number factorization
func factorizeHandler(w http.ResponseWriter, r *http.Request) {

	// Attempt to retrieve the number to factorize from the query string
	var numberStr string = r.URL.Query().Get("number")
	var number uint64

	if numberStr == "" { // If the number wasn't given, generate a random one
		number = rand.Uint64()
		fmt.Printf("Got no input number. Generating a random number: %d\n", number)
	} else {
		var err error

		// Attempt to parse the number out of its string representation
		number, err = strconv.ParseUint(numberStr, 10, 64)
		if err != nil {

			// If we encountered an error return an HTTP Error response
			errorMsg := fmt.Sprintf("Given 'number' has to be a 64 bit unsigned integer. Got: '%s'", numberStr)
			fmt.Println(errorMsg)
			http.Error(w, errorMsg, http.StatusBadRequest)
			return
		}
	}

	// Attempt to retrieve the number factorization from the cache
	factors, cached := cache[number]
	source := "cached" // track the source of the obtained factorization

	// If the factorization is not in the cache, we'll calculate it
	if !cached {
		factors = factorizeNumber(number)
		source = "calculated"
		cache[number] = factors // Put the calculated factorization into the cache
	}

	// Convert the list of factors into an array of factors ...
	var factors_arr []uint64 = make([]uint64, factors.Len())
	for it, i := factors.Front(), 0; it != nil; it, i = it.Next(), i+1 {
		factors_arr[i] = it.Value.(uint64)
	}

	// ... to further convert them into a byte array for further conversion into a string...
	// ... there must be an easier way of doing this.
	json_encoded_factors, _ := json.Marshal(factors_arr)

	// Prepare the HTTP response payload
	response := map[string]string{
		"number":  fmt.Sprintf("%d", number),
		"factors": string(json_encoded_factors),
		"source":  source,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {

	// Configure and start the web-server
	http.HandleFunc("/factorize", factorizeHandler)
	fmt.Println("Server started at :80")
	if err := http.ListenAndServe(":80", nil); err != nil {
		fmt.Println("Server failed:", err)
	}
}
