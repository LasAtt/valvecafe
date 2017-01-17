kumpulamenu
===========

NodeJS RESTful API for reading lunch data for University of Helsinki lunch menus.

**Routes**
* ```/restaurants``` find all restaurants
* ```/restaurants/{id}``` find a single restaurant
* ```/restaurants/menus[?date={date}]``` find  all restaurant's menus for today, or for specified date
* ```/restaurants/{id}/menus[?date={date}]```find a single restaurant's all available menus [or the menu for the specified date]
