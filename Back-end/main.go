package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Birthday  string `json:"birthday"`
	Avatar    string `json:"avatar"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Username  string `json:"username"`
	AboutMe   string `json:"aboutMe"`
}

func main() {
	r := http.NewServeMux()
	r.HandleFunc("/api/register", handleRegister)
	r.HandleFunc("/api/login", handleLogin)

	fmt.Println("Server listening on port 8080...")
	fmt.Println("http://localhost:8080")
	http.ListenAndServe(":8080", r)
}

func handleRegister(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	// Process registration logic here (e.g., save user to database)
	fmt.Println("Received register request:", user)
	json.NewEncoder(w).Encode(map[string]string{"message": "Registration successful"})
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var loginData map[string]string
	err := json.NewDecoder(r.Body).Decode(&loginData)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	// Process login logic here (e.g., check credentials)
	fmt.Println("Received login request:", loginData)
	json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
}
