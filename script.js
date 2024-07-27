function calculateTax(salary, taxYear) {
  let tax = 0;

  if (taxYear === "2022-23") {
    // Tax slabs for 2022-23
    if (salary <= 600000) {
      tax = 0;
    } else if (salary > 600000 && salary <= 1200000) {
      tax = (salary - 600000) * 0.025;
    } else if (salary > 1200000 && salary <= 2400000) {
      tax = 15000 + (salary - 1200000) * 0.125;
    } else if (salary > 2400000 && salary <= 3600000) {
      tax = 165000 + (salary - 2400000) * 0.2;
    } else if (salary > 3600000 && salary <= 6000000) {
      tax = 405000 + (salary - 3600000) * 0.25;
    } else if (salary > 6000000 && salary <= 12000000) {
      tax = 1005000 + (salary - 6000000) * 0.325;
    } else if (salary > 12000000) {
      tax = 2955000 + (salary - 12000000) * 0.35;
    }
  } else if (taxYear === "2023-24") {
    // Tax slabs for 2023-24
    if (salary <= 600000) {
      tax = 0;
    } else if (salary > 600000 && salary <= 1200000) {
      tax = (salary - 600000) * 0.025;
    } else if (salary > 1200000 && salary <= 2400000) {
      tax = 15000 + (salary - 1200000) * 0.125;
    } else if (salary > 2400000 && salary <= 3600000) {
      tax = 165000 + (salary - 2400000) * 0.225;
    } else if (salary > 3600000 && salary <= 6000000) {
      tax = 435000 + (salary - 3600000) * 0.275;
    } else if (salary > 6000000) {
      tax = 1095000 + (salary - 6000000) * 0.35;
    }
  } else if (taxYear === "2024-25") {
    // Tax slabs for 2024-25
    if (salary <= 600000) {
      tax = 0;
    } else if (salary > 600000 && salary <= 1200000) {
      tax = (salary - 600000) * 0.05;
    } else if (salary > 1200000 && salary <= 2200000) {
      tax = 30000 + (salary - 1200000) * 0.15;
    } else if (salary > 2200000 && salary <= 3200000) {
      tax = 180000 + (salary - 2200000) * 0.25;
    } else if (salary > 3200000 && salary <= 4100000) {
      tax = 430000 + (salary - 3200000) * 0.3;
    } else if (salary > 4100000) {
      tax = 700000 + (salary - 4100000) * 0.35;
    }
  } else {
    // Handle invalid tax year
    console.error("Invalid tax year provided");
  }

  return tax;
}

function displayTax(event) {
  event.preventDefault();

  const salaryInput = document.getElementById('salary').value;
  const salaryType = document.getElementById('salary-type').value;
  const taxYear = document.getElementById('tax-year').value;

  if (salaryInput === "") {
    alert("Please enter a salary");
    return;
  }

  let salary = Number(salaryInput);

  if (salaryType === "monthly") {
    salary *= 12;
  }

  const annualTax = calculateTax(salary, taxYear);
  const monthlyTax = annualTax / 12;

  const resultsDiv = document.getElementById('result');
  resultsDiv.innerHTML = `
    <p>Monthly Income <span>${(salary / 12).toLocaleString()}</span></p>
    <p>Monthly Tax <span>${monthlyTax.toLocaleString()}</span></p>
    <p>Salary After Tax <span>${((salary - annualTax) / 12).toLocaleString()}</span></p>
    <p>Yearly Income <span>${salary.toLocaleString()}</span></p>
    <p>Yearly Tax <span>${annualTax.toLocaleString()}</span></p>
    <p>Yearly Income After Tax <span>${(salary - annualTax).toLocaleString()}</span></p>
  `;
}

document.getElementById('tax-form').addEventListener('submit', displayTax);
