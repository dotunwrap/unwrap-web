package http

import (
	"github.com/gin-gonic/gin"

	"github.com/dotunwrap/unwrap-web/backend/http/handlers"
)

func RegisterMiddlewares(r *gin.Engine) {
	// TODO:
}

func RegisterRoutes(r *gin.Engine) {
	api := r.Group("/api")
	api.GET("/healthz", handlers.Health)

	v1 := api.Group("/v1")
	{
		v1.GET("/hello-world", handlers.HelloWorld)
	}
}
