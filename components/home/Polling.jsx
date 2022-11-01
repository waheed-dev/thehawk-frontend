import React from 'react'

export default function Polling() {
  return (
    <>
          <div class="side-widget sw-poll">
              <h5><span>Polling Box</span></h5>
              <div class="sw-inner">
                  <h4>Investigationes demonstrant lectores legere me lius quod legunt saepius ?</h4>
                  <form>
                      <ul>
                          <li><input type="radio" name="radiog_lite" id="radio1" class="css-checkbox" /><label for="radio1" class="css-label radGroup1">Lorem ipsum dolor sit amet, consectetuer</label></li>
                          <li><input type="radio" name="radiog_lite" id="radio2" class="css-checkbox" /><label for="radio2" class="css-label radGroup1">Sed diam nonummy nibh euismod tincidunt</label></li>
                          <li><input type="radio" name="radiog_lite" id="radio3" class="css-checkbox" /><label for="radio3" class="css-label radGroup1">Ullamcorper suscipit lobortis</label></li>
                          <li><input type="radio" name="radiog_lite" id="radio4" class="css-checkbox" /><label for="radio4" class="css-label radGroup1">Claritas est etiam processus dynamicus</label></li>
                      </ul>
                  </form>
                  <div class="dual-btns">
                      <a href="#">Vote</a>
                      <a href="#">View Result</a>
                  </div>
              </div>
          </div>
    </>
  )
}
