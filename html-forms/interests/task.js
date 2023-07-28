const interests = document.querySelectorAll('.interest__check');

for (let interest of interests) {
  interest.addEventListener('change', function(event) {
    const isChecked = event.target.checked;
    const nestedList = event.target.closest('.interest').querySelector('.interests');
    
    if (nestedList) {
      const nestedInterests = nestedList.querySelectorAll('.interest__check');
      nestedInterests.forEach(item => {
        item.checked = isChecked;
        item.indeterminate = false;
      });
    }
    
    const parentList = event.target.closest('.interests');
    const parentInterest = parentList?.closest('.interest');
    const parentInterestCheck = parentInterest?.querySelector('.interest__check');
    
    if (parentInterestCheck) {
      let checkedCount = 0;
      let indeterminateCount = 0;
      const parentInterests = parentList.querySelectorAll('.interest__check');
      
      parentInterests.forEach(item => {
        if (item.checked) checkedCount++;
        if (item.indeterminate) indeterminateCount++;
      });
      
      if (checkedCount === parentInterests.length) {
        parentInterestCheck.checked = true;
        parentInterestCheck.indeterminate = false;
      } else if (checkedCount === 0) {
        parentInterestCheck.checked = false;
        parentInterestCheck.indeterminate = false;
      } else {
        parentInterestCheck.checked = false;
        parentInterestCheck.indeterminate = true;
      }
    }
  });
}
