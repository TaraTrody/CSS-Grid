<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
</head>
<body>
<form id="myform" action="get">
  <fieldset>
    <legend>Your web development skillset</legend>
    
    <div class="formgrid">
      
      <input id="name" name="name" type="text" />
      <label for="name">name</label>
    
      <select id="experience" name="experience">
        <option value="1">1 year or less</option>
        <option value="2">2 years</option>
        <option value="3">3 - 4 years</option>
        <option value="5">5 years or more</option>
      </select>
      <label for="experience">experience</label>
    
      <input id="html" name="html" type="checkbox" />
      <label for="html">HTML</label>
    
      <input id="css" name="css" type="checkbox" />
      <label for="css">CSS</label>
    
      <input id="javascript" name="javascript" type="checkbox" />
      <label for="javascript">JavaScript</label>
      
      <textarea id="skills" name="skills" rows="5" cols="20"></textarea>
      <label for="skills">other skills</label>
      
      <button type="submit">SUBMIT</button>
      
    </div>
    
  </fieldset>
</form>

<p>This layout applies CSS Grid in all browsers which support it. It adapts well to any font or screen sizing.</p>
</body>
</html>