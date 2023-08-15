let nav_barap = () => {
  if (document.URL.match('vtop2') != null) {
    removeBoxStyleFromMenuToggle()
    let newNavDiv = document.createElement('div')
    // div.className = "navbar-brand";
    newNavDiv.classList.add('nav-custom-div')
    reg_no = document.querySelector('#authorizedIDX').value
    newNavDiv.innerHTML = `
    
       <a href="https://vtop2.vitap.ac.in/vtop/initialProcess"> <img src="https://i.ibb.co/MpbCp3s/onboarding-vit-logo-white.png " width= "46px" alt="Main Logo"></a>
        <a href="javascript:loadmydiv('examinations/StudentMarkView')" id="EXM0011" class="btnItem">Marks View</a>
        <a href="javascript:loadmydiv('academics/common/StudentAttendance')" id="ACD0042" class="btnItem"  >Class Attendance</a>
        <a href="javascript:loadmydiv('academics/common/StudentCoursePage')" id="ACD0045" class="btnItem"  >Course Page</a>
        <a href="javascript:loadmydiv('examinations/StudentDA')" id="EXM0017" class="btnItem"  >DA Upload</a>
        <a href="javascript:loadmydiv('academics/common/StudentTimeTable')" id="ACD0034" class="btnItem"  >Time Table</a>
        <a href="javascript:loadmydiv('academics/common/CalendarPreview')" id="ACD0128" class="btnItem"  >Academic Calendar</a>
        <a href="javascript:loadmydiv('academics/common/Curriculum')" id="ACD0104" class="btnItem"  >My Curriculum</a>
        <a href="javascript:loadmydiv('examinations/examGradeView/StudentGradeView')" id="EXM0065" class="btnItem"  >Sem Grade</a>
        <a href="javascript:loadmydiv('studentsRecord/StudentProfileAllView')" id="STA002" class="btnItem" >${reg_no}(STUDENT)</a>
        <a class="btn btn-success" href="javascript:void(0)" onclick="ajaxCall('processLogout',null,'page_outline')">Sign out</a>               
        `
    const menuToggleHamburger = document.getElementById('menu-toggle')
    // menuToggleHamburger.className = ""; // remove all classes of menuToggleHamburger
    const navbar = document.getElementsByClassName(
      'navbar navbar-default navbar-fixed-top VTopHeader',
    )[0]
    navbar.innerHTML = ''
    newNavDiv.insertBefore(menuToggleHamburger, newNavDiv.firstChild)
    navbar.appendChild(newNavDiv)
    // document.getElementsByClassName("navbar-header")[0].insertAdjacentElement("beforeend", div)
  }
}

function removeBoxStyleFromMenuToggle() {
  var menuToggle = document.getElementById('menu-toggle')
  if (menuToggle) {
    menuToggle.classList.remove('box')
    menuToggle.classList.add('custom-hamburger')
  }
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'vtop2_nav_bar') {
    try {
      // alert("asdjhg")
      nav_barap()
    } catch (error) {
      // console.log(error);
    }
  }
})
