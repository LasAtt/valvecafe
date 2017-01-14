kumpulamenu
===========

NodeJS RESTful API for reading lunch data for University of Helsinki lunch menus.

**Routes**
* ```/restaurants``` find all restaurants
* ```/restaurants/{id}``` find a single restaurant
* ```/restaurants/menus/{date}``` find  all restaurant's menus for a specific date __(YYYY-MM-DD)__
* ```/restaurants/{id}/menus/```find a single restaurant's all available menus
* ```/restaurants/{id}/menus/{date}``` find a single restaurant's menu for the specific date
