/*
 * Mostly ChatGPT-generated Go web-app that calculates square roots for a given list of float numbers,
 * or 100 random float numbers if no input was given.
 *
 * Usage Examples:
 *   http://localhost:80/sqrt
 *   http://localhost:80/sqrt?compressed=true
 *   http://localhost:80/sqrt?numbers=4,9,16,25
 */

package main

import (
	"compress/gzip" // For Gzip compression
	"encoding/json" // For JSON encoding of the results
	"fmt"           // For printing things out to stdout
	"io"            // For io.Writter
	"math"          // To actually calculate the square root
	"math/rand"     // For random number generation
	"net/http"      // For HTTP requests handling
	"runtime"       // For CPU numbers configuration
	"strconv"       // For parsing numbers our of strings
	"strings"       // For URL params string processing
)

func sqrtHandler(w http.ResponseWriter, r *http.Request) {
	numbersStr := r.URL.Query().Get("numbers")
	compressed := r.URL.Query().Get("compressed") == "true"
	var numbers []float64
	var results []float64

	if numbersStr == "" { // If no input is given
		// Generate 1000 random numbers between 0 and 1,000,000,000
		for i := 0; i < 1000; i++ {
			num := rand.Float64() * 1000000000
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

	// Apply Gzip compression if the "compressed" URL parameter is set to "true"
	var writer io.Writer = w
	if compressed {
		w.Header().Set("Content-Encoding", "gzip")
		gz := gzip.NewWriter(w)
		defer gz.Close()
		writer = gz
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(writer).Encode(response)
}

func main() {
	// Get the number of available CPUs
	numCPU := runtime.NumCPU()

	// Set GOMAXPROCS to the number of CPUs
	runtime.GOMAXPROCS(numCPU)
	fmt.Printf("Running with %d CPUs\n", numCPU)

	http.HandleFunc("/sqrt", sqrtHandler)
	fmt.Println("Server started at :80")
	if err := http.ListenAndServe(":80", nil); err != nil {
		fmt.Println("Server failed:", err)
	}
}
