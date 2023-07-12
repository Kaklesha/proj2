//skysql:dellis$ cat gomaria.go

package main

import (
	
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"github.com/gorilla/mux"
	// "database/sql"
	_ "github.com/go-sql-driver/mysql"
)

//var database *sql.DB

type Article struct {
	ID 		 int	    `json:"id"`
	Name     string 	`json:"name"`
	Price   int	    `json:"price"`
	Image 	string 		`json:"image"`
	
}

type Articles []Article


// Uncaught runtime errors:
// ERROR
// NetworkError when attempting to fetch resource.



func getArticle(w http.ResponseWriter, r *http.Request) {
	// epm := Articles{
	// 	//Article{1, "Test Title", 10000, false, true},
	// 	 Article{ID: 5, Name: "Title", Salary: 18000, Increase: true, Like: false},
	// 	 Article{ID: 6, Name: "Guth", Salary: 21000, Increase: false, Like: true},
	// 	Article{ID: 7, Name: "Ivan", Salary: 35000, Increase: true, Like: false},
	// }
	epm := Articles{
		Article{ ID: 1,
		 Name: "Toyfota Camry",
		 Price:24970,
		 Image: "car1.jpg",
		 },
		 Article{ ID: 2,
			 Name: "Fergrari",
			 Price:54970,
			 Image: "car2.jpg",
			 },

		Article{ ID: 3,
			Name: "BMW",
			Price:144970,
			Image: "car3.jpg",
			},
	 }


	fmt.Println("Endpoint")
	w.Header().Set("Accept","application")
	w.Header().Set("Access-Control-Allow-Origin","*")

	// database :=	connectWithDB()

	// results, err := database.Query("SELECT id, name, salary, increase, rise FROM Employees ")
	// defer database.Close()
	// if err != nil{
	// 	panic(err.Error())
	// }

	// 	epm := Articles{}
	// for results.Next(){
	// 	var user Article
	// 	err = results.Scan(&user.ID, &user.Name, &user.Salary, &user.Increase,&user.Like)
		
		
	// 	if err != nil{
	// 		panic(err.Error())
	// 	}
	// 	epm =append(epm , user)
	// }
	fmt.Println(epm)
	
	json.NewEncoder(w).Encode(epm)
}

func AddArticle(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "TEst POST Endpoint Hi")
	w.Header().Set("Accept","application/json")
	w.Header().Set("Access-Control-Allow-Origin","*")
	w.Header().Set("Access-Control-Allow-Methods","POST")

	// var epm Article
	// json.NewDecoder(r.Body).Decode(&epm)

	// database :=	connectWithDB()

	// insert, err := database.Query("INSERT INTO Employees VALUES(?,?,?,?,?);", nil, epm.Name, epm.Salary, epm.Increase, epm.Like)
	// defer database.Close()
	// if err != nil{
	// 	panic(err.Error())
	// }
	// defer insert.Close()

	//json.NewEncoder(w).Encode(epm)
}


func DeleteArticle(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "TEst DELETE Endpoint Hi")
	w.Header().Set("Accept","application/json")
	w.Header().Set("Access-Control-Allow-Origin","*")
	w.Header().Set("Access-Control-Allow-Methods","POST")

	// params:=mux.Vars(r)
	

	// database :=	connectWithDB()

	// delete, err := database.Query("DELETE FROM Employees WHERE id=?;", params["id"])
	// defer database.Close()
	// if err != nil{
	// 	panic(err.Error())
	// }
	// defer delete.Close()

	//json.NewEncoder(w).Encode(delete)
}


// func homePage(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Hmepage Endpoint Hit")
// }

func Router() *mux.Router {

	myRouter := mux.NewRouter()

	myRouter.HandleFunc("/api/employees", getArticle).Methods("GET","OPTIONS")
	// myRouter.HandleFunc("/api/employees", AddArticle).Methods("POST","OPTIONS")
//	myRouter.HandleFunc("/api/employees/{id}", DeleteArticle).Methods("POST","OPTIONS")
	return 	myRouter
}

// func CountFromTable(){

// 	db, err := sql.Open("mysql", "test_user:1410@/my_db")

// 	count, err := database.Query("SELECT count(*) FROM Employees ")

// 	if err != nil{
// 		panic(err.Error())
// 	}
	
// 	for count.Next(){
// 	var inc int
// 	err = count.Scan(&inc)
// 	if err != nil{
// 		panic(err.Error())
// 	}
// 	fmt.Println(inc)
//     }

// 	//return inc 

// }

// func connectWithDB() *sql.DB {
// 	fmt.Println("Check for connect DB")
// 	//db, err := sql.Open("mysql", "test_user:1410@tcp(127.0.0.1:3306)/my_db")

// 	db, err := sql.Open("mysql", "test_user:1410@/my_db")

// 	if err != nil{
// 		panic(err.Error())
// 	}
// 	//database = db
	
// 	fmt.Println("Successfully connected to MariaBD database")


	
// 	return db
// }


func main() {

	// fmt.Println("Check for connect DB")
	// //db, err := sql.Open("mysql", "test_user:1410@tcp(127.0.0.1:3306)/my_db")
	// db, err := sql.Open("mysql", "test_user:1410@/my_db")

	// if err != nil{
	// 	panic(err.Error())
	// }
	// database = db
	// defer db.Close()


	 fmt.Println("Citizix - Hello World!")
	 r := Router()
	 log.Fatal(http.ListenAndServe(":9000", r))

	//connectWithDB()


	

}


