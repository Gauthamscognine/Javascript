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
 

