package main

import "github.com/gin-gonic/gin"

func main() {
	app := gin.Default()

	app.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "This is mh-joinup backend API",
		})
	})

	app.Run("http://localhost:3001")
}
