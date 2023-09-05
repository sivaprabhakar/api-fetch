
async function foo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      const data1 = await response.json();
      
      
      for (let i = 0; i < data1.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="row row-cols-1 row-cols-md-3">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Name: ${data1[i].name}</h5>
                <p class="card-text">Email: ${data1[i].email}</p>
                <p class="card-text">Street: ${data1[i].address.street}</p>
                <p class="card-text">City: ${data1[i].address.city}</p>
              </div>
            </div>
          </div>
        </div>`;
        document.body.append(div);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  foo();
  