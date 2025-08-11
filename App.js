// cloud Commando object ..details
const developer = {
  devID: 9,
  username : "cloudCommando",
  yearsExperience: 6,
  isActive: true,
  pictureUrl : "https://api.dicebear.com/9.x/adventurer/svg?seed=Vivian",
  email: "commando@example.com",
  phone: "678-901-2345",
  skills:  ["Terraform", " Azure", " Docker"],
  bio: "A cloud infrastructure expert with 6 years of experience, cloudCommando excels at automating deployments on Azure using Terraform and Docker.",

};

// container
const main = document.createElement("main");
main.className = "container";

// Create card
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
    <img src="${developer.pictureUrl}">
    <div class = "idAndActive"><h2>${developer.devID}</h2>
    <span class="label label-success">✅</span>
    </div>
  
  <p><strong>Username:</strong> ${developer.username}</p>
  <p><strong>Experience (years):</strong> ${developer.yearsExperience}</p>
  <p><strong>Email:</strong> ${developer.email}</p>
  <p><strong>Phone:</strong> ${developer.phone}</p>
  <p><strong>Skills:</strong> ${developer.skills}</p>
  <p><strong>Bio:</strong> <i>${developer.bio}</i></p>
`;

// Append card to main, and main to body
main.appendChild(card);
document.body.appendChild(main);
