
const italic = {
  fontStyle: "italic"
}

function Research() {
  return (
    <div id="research">
      <div>
        <h2>Research</h2>
        <section id="publications">
          <h3>Publications</h3>
          <ul>
            <li>
              (Forthcoming). Doing Harm While Allowing It: Towards a 
              New Framework for the Doctrine of Doing and Allowing. 
              <span style={italic}> Philosophers' Imprint</span>. 
              <br/>
              <a 
                href={require("../resources/phimp_preprint.pdf")} 
                target="_blank" 
                rel="noreferrer" >
                Pre-Print PDF
              </a>
              <a 
                href="https://doi.org/10.3998/phimp.3370" 
                target="_blank" 
                rel="noreferrer" >
                Link
              </a>
            </li>
            <li>
              (2020). Counterfactuals and Double Prevention: Trouble 
              for the Causal Independence Thesis. 
              <span style={italic}> Thought: A Journal of Philosophy</span>, 
              9(3): 198-206. 
              <br/>
              <a 
                href="https://www.pdcnet.org//collection/fshow?id=tht_2020_0009_0003_0198_0206&pdfname=tht_2020_0009_0003_0051_0059.pdf&file_type=pdf"
                target="_blank"
                rel="noreferrer" >
                PDF
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section id="worksInProgress">
          <h3>Works in Progress</h3>
          <ul>
            <li>
              A paper on intervening agency, harm, and defense 
              (<span style={italic}>under review</span>)
            </li>
            <li>A paper on accounts of causation and double prevention</li>
            <li>
              A paper that examining the moral significance of causation 
            </li>
            <li>A paper on the ethics of abortion</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Research; 
