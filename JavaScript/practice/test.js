const test = {
  "company": "TechNova Solutions",
  "location": "Hyderabad",
  "departments": [
    {
      "name": "Engineering",
      "teams": [
        {
          "teamName": "Frontend",
          "lead": { "name": "Akhil", "role": "Lead Developer", "salary": 95000 },// departments have 2 objects .. in that we have teams array , whihc have multiple objects , in 
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
 



const final_dev_list = [];
const inp_json = {
  "company": "TechNova Solutions",
  "location": "Hyderabad",
  "departments": [
    {
      "name": "Engineering",
      "teams": [
        {
          "teamName": "Frontend",
          "lead": { "name": "Akhil", "role": "Lead Developer", "salary": 95000 },
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
 
ultimate_list =[];

function getDevelopers() {
    try {
        const inp_j = inp_json;
        const departments = inp_j?.departments;

        const teams = departments.map((department) => {
            const teams = department?.teams;
      
            const findDevelopers = teams.forEach((team) => {
                // const leads = teams?.lead.filter((l) => l.role === 'Developer');
                const employees = team?.employees;
                

                const developers = employees.filter((e) => e.role === 'Developer');
                const salary_hike = developers.map((e) => e.salary = e.salary*1.10);
                console.log("developers",developers)

                if(developers) final_dev_list.push(developers);
            })
            // console.log("findDevelopers",findDevelopers)
            // const tenp_var = findDevelopers.map((dev_names)=>{
            //     dev_names.map((dev_n)=>{
            //         final_dev_list.push(dev_n?.name)
            //     })
            // })
        })

        console.log("final_dev_list",final_dev_list);
            
        const result = final_dev_list.map(d => {
            if (d[0]?.name){
            ultimate_list.push(d[0]?.name) ;
            }
                
        })

        console.log("Developers result", ultimate_list);
        
    }
    catch(err) {
        console.log("Error", err);
    }
}

getDevelopers();