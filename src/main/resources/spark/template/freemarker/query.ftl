<#assign content>

<h1> <br> ${title} <br></h1>

<p>



<div class="row">
  <div class="column">
    <div class="box_header">
      Price Expectations
    </div>


  </div>

  <div class="column">
    <div class="box_header">
      Investment Portfolio
    </div>

    <ul name="choices" id="choices" class="list">
      <li>
        <div class="list_element">

          <select name="left_left_1" id="left_left_1">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <select name="left_middle_2" id="left_middle_2">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

        </div>
      </li>
      <li>
        <div class="list_element">

          <select name="left_left_2" id="left_left_2">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

        </div>
      </li>
      <li>
        <div class="list_element">
          two
        </div>
      </li>
    </ul>

    <div class="column_half">
      <div name="add_button_left" id="add_button_left" class="add_button">

      </div>
    </div>

    <div class="column_half">
      <div name="sub_button_left" id="sub_button_left" class="sub_button">

      </div>
    </div>

  </div>

  <div class="column">
    <div class="box_header">
      News and Analysis
    </div>
  </div>
</div>


</p>

</#assign>
<#include "main.ftl">
