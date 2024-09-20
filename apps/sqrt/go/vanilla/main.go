/*
 * Mostly ChatGPT-generated Go web-app that calculates square roots for a given list of float numbers,
 * or 100 random float numbers if no input was given.
 *
 * Usage Examples:
 *   http://localhost:8080/sqrt
 *   http://localhost:8080/sqrt?numbers=4,9,16,25
 */

package main

import (
	"encoding/json" // For JSON encoding of the results
	"fmt"           // For printing things out to stdout
	"math"          // To actually calculate the square root
	"math/rand"     // For random number generation
	"net/http"      // For HTTP requests handling
	"strconv"       // For parsing numbers our of strings
	"strings"       // For URL params string processing
)

func sqrtHandler(w http.ResponseWriter, r *http.Request) {
	numbersStr := r.URL.Query().Get("numbers")
	var numbers []float64
	var results []float64

	if numbersStr == "" { // If no input is given
		// Generate 100 random numbers between 0 and 100
		for i := 0; i < 100; i++ {
			num := rand.Float64() * 100
			numbers = append(numbers, num)
		}
	} else {
		// Parse the list of numbers from the query parameter
		numsStr := strings.Split(numbersStr, ",")
		for _, numStr := range numsStr {
			numStr = strings.TrimSpace(numStr)
			num, err := strconv.ParseFloat(numStr, 64)
			if err != nil {
				http.Error(w, "Invalid number: "+numStr, http.StatusBadRequest)
				return
			}
			numbers = append(numbers, num)
		}
	}

	// Calculate square roots
	for _, num := range numbers {
		results = append(results, math.Sqrt(num))
	}

	// Prepare the response
	response := map[string][]float64{
		"numbers": numbers,
		"results": results,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/sqrt", sqrtHandler)
	fmt.Println("Server started at :80")
	if err := http.ListenAndServe(":80", nil); err != nil {
		fmt.Println("Server failed:", err)
	}
}
