package main

import (
	"log"

	"github.com/gin-gonic/gin"

	"github.com/dotunwrap/unwrap-web/backend/http"
)

func main() {
	r := gin.New()
	http.RegisterMiddlewares(r)
	http.RegisterRoutes(r)

	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
