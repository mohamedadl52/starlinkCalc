<template>
  <dv class="container">
    <div class="  flex items-center">
     <img class="w-32" src="@/assets/logo.jpg" alt="">
    </div>
    <div class="bg-gray-100 flex items-center flex-col justify-start h-screen">
      
  <div class="text-center">
  <p class="text-3xl text-gray-800 font-bold py-4 px-6 bg-white shadow-lg rounded-lg">حساب سعر وفواتير استارلنك</p>
</div>
  <br> <br>
<div>
    <select name="starlink-countries" id="starlink-countries" class="block text-right text-xl appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline">
    <option value="" disabled selected>اختر الباقه المناسبه</option>
    <option value="mal"> <span>ملاوي</span> <span>(170,000)</span> </option>
    <option value="nig"><span>نيجيريا</span> <span>(167,000)</span></option>
    <option value="zam"><span>زامبيا</span> <span>(2500)</span></option>
   <option value="kan"><span>كينيا</span> <span>(14,000)</span></option>
    <option value="moz"><span>مزنبيق</span> <span>(6,000)</span></option>
    <!-- Add more countries here -->
  </select>

</div>


<div>
    <div class="text-xl cairo-test "> اختر احد الباقات اعلاه</div>
    <div>
        <table class="text-xl">
  <thead>
    <tr>
        <th class="flex justify-start gap-x-2"> <span>جنيه</span><span>2700</span></th>
        <th class="text-left">اجمالي بنكك</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="flex justify-center gap-x-2"> <span>جنيه</span><span>2700</span></td>
      <td>سعر الصرف</td>
    </tr>
    <tr>
        <td><span>100</span><span>$</span></td>
      <td>سعر الباقه</td>
    </tr>
    <tr>
        <td><span>100</span><span>$</span></td>
      <td> العموله</td>
    </tr>
  </tbody>
</table>

    </div>
</div>

    </div>
  </dv>   
</template>

<style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap');
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  }

  table {
    width: 100%;
    margin: 40px auto;
    padding: 20px;
    border-collapse: collapse;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;

  }

  th {
    background-color: #2ecc71; /* Green color for header */
    color: #fff;
    font-weight: bold;
    width: 204px;
    padding: 20px 10px;
    text-align: left;
  }
  th:nth-child(2) {
    text-align: right;
  }
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2; /* Light gray background for even rows */
  }

  tr:hover {
    background-color: #e9e9e9; /* Hover effect for rows */
  }
  .cairo-test {
  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
  font-weight:600;
  font-style: normal;
  text-align: center;
  margin: 20px 20px;
  font-size: 30px;
  font-variation-settings: "slnt" 0;
}
</style>