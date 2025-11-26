const test = {
  "company": "TechNova Solutions",
  "location": "Hyderabad",
  "departments": [
    {
      "name": "Engineering",
      "teams": [
        {
          "teamName": "Frontend",
          "lead": { "name": "Akhil", "role": "Lead Developer", "salary": 95000 , "gender"},// departments have 2 objects .. in that we have teams array , whihc have multiple objects , in 
          //
          "employees": [
            {
              "id": 1,
              "name": "Arjun",
              "role": "Developer",
              "salary": 55000,
              "skills": ["React", "JS", "CSS"],
              "active": true
            },
            {
              "id": 2,
              "name": "Riya",
              "role": "UI/UX Designer",
              "salary": 48000,
              "active": true
            }
          ]
        },
        {
          "teamName": "Backend",
          "lead": { "name": "Kavya", "role": "Senior Developer", "salary": 105000 },
          "employees": [
            {
              "id": 3,
              "name": "Manish",
              "role": "Developer",
              "salary": "70000", 
              "active": true,
              "projects": [
                { "name": "Billing API", "status": "Active" },
                { "name": "AI Engine", "status": "Completed" }
              ]
            },
            {
              "id": 4,
              "name": "Sandeep",
              "role": "Tester",
              "salary": 45000,
              "active": false
            }
          ]
        }
      ]
    },
    {
      "name": "Operations",
      "teams": [
        {
          "teamName": "Support",
          "employees": [
            {
              "id": 5,
              "name": "Pooja",
              "role": "Support Engineer",
              "salary": 40000,
              "shift": "Night"
            }
          ]
        },
        {
          "teamName": "DevOps",
          "employees": [
            {
              "id": 6,
              "name": "Rahul",
              "role": "Developer",
              "salary": 82000,
              "tools": ["Docker", "Kubernetes"]
            }
          ]
        }
      ],
      "metadata": {
        "totalTeams": 2,
        "lastUpdated": "2025-01-13T10:30:00Z"
      }
    }
  ],
  "tags": ["tech", "employees", "internal-data"]
}
 


// console.log(test.departments[0].teams[0].employees[0].salary);
// console.log(test.departments[0].teams[1].employees[0].salary);
// console.log(test.departments[1].teams[1].employees[0].salary);

let res = [];
const dept = test.departments;

const team = dept.map(d => {
  const tea = d.teams;

  const teamemp = tea.map(t => {
    const employees = t.employees;

    // 1. Filter developers
    const developers = employees.filter(e => e.role === "Developer");

    // 2. Update salary (use map, NOT filter)
    const updated = developers.map(e => ({
      name:e.name,
      role:e.role,
      salary: Number(e.salary) * 1.10
    }));
    res.push(updated);
  });

});

console.log(res);



// console.log(dept,"this is dept");
let output = [];
for(let i=0;i<dept.length;i++){
    const tea = dept[i].teams;
    // console.log(tea,"this is teams");
    for(let j=0;j<tea.length;j++){
        const emp = tea[j].employees;
        // console.log(emp,"this is emp");
        for(let k=0;k<emp.length;k++){
            // console.log(emp[k].salary,"debug")
            if(emp[k].role==="Developer"){
                const finalobj = {
                    ename:emp[k].name,
                    old_sal:emp[k].salary,
                    new_sal:emp[k].salary*1.10
                }
                output.push(finalobj);
            }

        }

    }
}
console.log(output,"this is the answer");



























