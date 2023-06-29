
const ResultTable = (props) => (
<table className="result">
  <thead>
    <tr>
      <th>Year</th>
      <th>Total Savings</th>
      <th>Interest (Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((year)=> (
 <tr key={year.key}>
   <td>{year.year}</td>
   <td>{year.savingsEndOfYear}</td>
   <td>{year.yearlyInterest}</td>
   <td>
     {year.savingsEndOfYear -
       props.initialInvestment -
       year.yearlyContribution * year.year}
   </td>
   <td>{props.initialInvestment + year.yearlyContribution * year.year}</td>
 </tr>
))}
   
  </tbody>
</table>
);
export default ResultTable;