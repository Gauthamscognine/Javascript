const test = {
  "company": "CodeMatrix Pvt Ltd",
  "employees": [
    {
      "empId": 101,
      "name": "Akhil",
      "role": "Senior Developer",
      "skills": ["Java", "Spring Boot", "Postgres"],
      "joinedDate": "2021-03-01",
      "projects": [
        {
          "projectId": "PRJ1001",
          "projectName": "Inventory Management System",
          "client": "Walmart",
          "startDate": "2023-01-10",
          "endDate": "2023-11-30",
          "billingType": "Monthly",
          "tasks": [
            {
              "taskId": "T101",
              "taskName": "API Development",
              "status": "Completed",
              "startDate": "2023-01-12",
              "endDate": "2023-04-25",
              "workLogs": [
                { "date": "2023-01-12", "hours": 6 },
                { "date": "2023-01-13", "hours": 8 },
                { "date": "2023-02-01", "hours": 7 }
              ]
            },
            {
              "taskId": "T102",
              "taskName": "Database Optimization",
              "status": "Active",
              "startDate": "2023-05-01",
              "endDate": null,
              "workLogs": [
                { "date": "2023-05-01", "hours": 5 },
                { "date": "2023-05-02", "hours": 8 },
                { "date": "2023-07-10", "hours": 6 }
              ]
            }
          ]
        },
        {
          "projectId": "PRJ1004",
          "projectName": "Payment Gateway Integration",
          "client": "PayPal",
          "startDate": "2024-06-15",
          "endDate": null,
          "billingType": "Hourly",
          "tasks": [
            {
              "taskId": "T201",
              "taskName": "Webhook Implementation",
              "status": "Active",
              "startDate": "2024-06-18",
              "endDate": null,
              "workLogs": [
                { "date": "2024-06-18", "hours": 8 },
                { "date": "2024-06-19", "hours": 7 }
              ]
            }
          ]
        }
      ]
    },
    {
      "empId": 102,
      "name": "Riya",
      "role": "Frontend Developer",
      "skills": ["React", "JavaScript", "Redux"],
      "joinedDate": "2022-07-20",
      "projects": [
        {
          "projectId": "PRJ1002",
          "projectName": "E-Commerce Platform",
          "client": "Amazon",
          "startDate": "2023-02-01",
          "endDate": "2024-01-15",
          "billingType": "Monthly",
          "tasks": [
            {
              "taskId": "T301",
              "taskName": "UI Design Implementation",
              "status": "Completed",
              "startDate": "2023-02-05",
              "endDate": "2023-06-10",
              "workLogs": [
                { "date": "2023-02-05", "hours": 7 },
                { "date": "2023-02-06", "hours": 6 }
              ]
            },
            {
              "taskId": "T302",
              "taskName": "Responsive Layout Fixes",
              "status": "Completed",
              "startDate": "2023-07-01",
              "endDate": "2023-09-20",
              "workLogs": [
                { "date": "2023-07-01", "hours": 5 },
                { "date": "2023-07-03", "hours": 8 }
              ]
            }
          ]
        }
      ]
    },
    {
      "empId": 103,
      "name": "Manish",
      "role": "QA Engineer",
      "skills": ["Selenium", "Playwright", "API Testing"],
      "joinedDate": "2020-09-10",
      "projects": [
        {
          "projectId": "PRJ1003",
          "projectName": "Insurance Mobile App",
          "client": "Aetna",
          "startDate": "2022-10-05",
          "endDate": null,
          "billingType": "Fixed",
          "tasks": [
            {
              "taskId": "T401",
              "taskName": "Automation Framework Setup",
              "status": "Completed",
              "startDate": "2022-10-06",
              "endDate": "2023-02-20",
              "workLogs": [
                { "date": "2022-10-06", "hours": 8 }
              ]
            },
            {
              "taskId": "T402",
              "taskName": "Regression Suite Execution",
              "status": "Active",
              "startDate": "2023-03-05",
              "endDate": null,
              "workLogs": [
                { "date": "2023-03-05", "hours": 6 },
                { "date": "2023-03-06", "hours": 8 }
              ]
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "generatedAt": "2025-01-21T12:00:00Z",
    "records": 3
  }
}

//return employee name , project and task name;

// Return an object with Group of Tasks per Status

let output = {
    
}


let statusName = [];




const emp = test.employees;
for(let i=0;i<emp.length;i++){
    // console.log(emp,"this is EMP")

    const ename = emp[i].name;
    const project = emp[i].projects;

    for(let j=0;j<project.length;j++){
        // console.log(project,"This is PROJECTS");
        const pname = project[j].projectName;
        // console.log(pname)
        const task = project[j].tasks;
        

        for(let k=0;k<task.length;k++){
            const taskName = task[k].taskName;
            let curstatus = task[k].status;
            // console.log(curstatus,"this is statusssss");
            if(statusName.includes(curstatus)){
                const obj1 = {
                    name:ename,
                    projectName :pname,
                    "taskName" : taskName
                }
                output[curstatus].push(obj1);
            }
            else{
                output[curstatus] = [];
                statusName.push(curstatus);
                const obj2 = {
                    name:ename,
                    projectName :pname,
                    "taskName" : taskName
                }
                output[curstatus].push(obj2);

            }

            // if(task[k].status==="Completed"){
            //     const obj1 = {
            //         name:ename,
            //         projectName :pname,
            //         "taskName" : taskName
            //     }
            //     output.completed.push(obj1);
            // }
            // else{
            //      const obj2 = {
            //         name:ename,
            //         projectName :pname,
            //         "taskName":taskName
            //     }
            //     output.active.push(obj2);

            // }

        }

    }
}
console.log(output);