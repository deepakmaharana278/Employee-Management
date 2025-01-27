const employee = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstName": "Ashu",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Compile the sales data and prepare the monthly report.",
        "taskDate": "2025-01-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Participate in the weekly team meeting.",
        "taskDate": "2025-01-15",
        "category": "Meeting"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Sneha",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "Update the website homepage with the latest announcements.",
        "taskDate": "2025-01-21",
        "category": "Web Development"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Aryan",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix server issues",
        "taskDescription": "Troubleshoot and fix the server downtime issue.",
        "taskDate": "2025-01-19",
        "category": "IT Support"
      }
    ],
    "taskNumbers": {
      "active": 0,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Amlan",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer feedback analysis",
        "taskDescription": "Analyze customer feedback and create a summary report.",
        "taskDate": "2025-01-22",
        "category": "Analysis"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Krishna",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare training material",
        "taskDescription": "Create training material for the new employees.",
        "taskDate": "2025-01-25",
        "category": "Training"
      }
    ],
    "taskNumbers": {
      "active": 0,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
]

  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]
export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem('employee'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
  // console.log(employeeData, adminData)
  return {employeeData, adminData}
}