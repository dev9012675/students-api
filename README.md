

# Students-API

This mini-project has been created to act as a submission for the tasks performed in Week 3.


## API Reference


#### Create a student

```http
  POST /api/students
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `student`      | `Student` | **Required**. data of student to be created in the database. |

#### Sample Request Body:

```json
{
  "info": {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 21,
    "gender": "Female"
  },
  "location": {
    "country": "USA",
    "state": "California",
    "city": "Los Angeles",
    "street": "1234 Elm St"
  },
  "grade": {
    "scores": [88, 92, 85, 79, 95],
    "grade": "A"
  },
  "emergencyInfo": {
    "name": "John Johnson",
    "relation": "Father",
    "phone": "555-123-4567"
  }
}
```

#### Sample Request Response:
                       
On a successful request, you should receive the newly created student document such as follows:

```json
{
  "info": {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 21,
    "gender": "Female",
    "_id": "672a504b43fd3225a39d7928"
  },
  "location": {
    "country": "USA",
    "state": "California",
    "city": "Los Angeles",
    "street": "1234 Elm St",
    "_id": "672a504b43fd3225a39d7929"
  },
  "grade": {
    "scores": [
      88,
      92,
      85,
      79,
      95
    ],
    "grade": "A",
    "_id": "672a504b43fd3225a39d792a"
  },
  "emergencyInfo": {
    "name": "John Johnson",
    "relation": "Father",
    "phone": "555-123-4567",
    "_id": "672a504b43fd3225a39d792b"
  },
  "_id": "672a504b43fd3225a39d7927",
  "createdAt": "2024-11-05T17:05:15.538Z",
  "updatedAt": "2024-11-05T17:05:15.538Z",
  "__v": 0
}

```




#### Get all students

```http
  GET /api/students
```

#### Sample Request Response: 
You should get all the students currently present in the database.

```json
[
  {
    "_id": "672a504b43fd3225a39d7927",
    "info": {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "age": 21,
      "gender": "Female",
      "_id": "672a504b43fd3225a39d7928"
    },
    "location": {
      "country": "USA",
      "state": "California",
      "city": "Los Angeles",
      "street": "1234 Elm St",
      "_id": "672a504b43fd3225a39d7929"
    },
    "grade": {
      "scores": [
        88,
        92,
        85,
        79,
        95
      ],
      "grade": "A",
      "_id": "672a504b43fd3225a39d792a"
    },
    "emergencyInfo": {
      "name": "John Johnson",
      "relation": "Father",
      "phone": "555-123-4567",
      "_id": "672a504b43fd3225a39d792b"
    },
    "createdAt": "2024-11-05T17:05:15.538Z",
    "updatedAt": "2024-11-05T17:05:15.538Z",
    "__v": 0
  },
  {
    "_id": "672a542b43fd3225a39d792d",
    "info": {
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "age": 22,
      "gender": "Male",
      "_id": "672a542b43fd3225a39d792e"
    },
    "location": {
      "country": "Canada",
      "state": "Ontario",
      "city": "Toronto",
      "street": "5678 Maple Ave",
      "_id": "672a542b43fd3225a39d792f"
    },
    "grade": {
      "scores": [
        78,
        85,
        90,
        88,
        92
      ],
      "grade": "B",
      "_id": "672a542b43fd3225a39d7930"
    },
    "emergencyInfo": {
      "name": "Sarah Smith",
      "relation": "Mother",
      "phone": "555-987-6543",
      "_id": "672a542b43fd3225a39d7931"
    },
    "createdAt": "2024-11-05T17:21:47.574Z",
    "updatedAt": "2024-11-05T17:21:47.574Z",
    "__v": 0
  }
]
```

#### Get specific student

```http
  GET /api/students/${id}
```




| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of student to fetch. |

#### Sample Request Response:

On a successful request, you should receive a document containing data about the specified student.

#### Update a student

```http
  PUT /api/students/${id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of student to update. |
| `student`      | `Partial<Student>` | **Required**. data of student to be updated. |

#### Sample Request Body:

```json
{
     "info":{ "email" : "test10@mail.com" , "name" : "Test Name"  } ,
    "grade":{"scores" : [98 , 97 , 66 , 55 , 73]} 
   
}

```

#### Sample Request Response:-

Upon a successful request , you will receive the updated student document.

#### Delete a student

```http
  DELETE /api/students/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of student to delete. |

#### Sample Request Response:-

Upon a successful request , you will receive the deleted student document.



