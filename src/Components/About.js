
const italic = {
  fontStyle: "italic"
}


function About() {
  return (
    <div id="about">
      <section>
        <h2>About</h2>
        <p>
          I'm a PhD candidate in philosophy at the University of Massachusetts 
          Amherst.  My research is specialized in ethics and metaphysics.  I 
          have primary research interests in harm, the ethics of self-defense, 
          the metaphysics of causation, and their intersection.
        </p>
        <p>
          The notion of imposing a threat of harm and, relatedly, the notion of 
          doing harm are cornerstone notions for the ethics of 
          self-defense. However, there are outstanding questions about them. For
           one, it is not clear what precisely it means to do 
           harm (and by extension impose a threat of harm). Second, it is not 
           clear whether these notions, however they are articulated, should  
           play a role in ethics that they are widely assumed to play in some 
           literatures (e.g., the self-defense literature).
        </p> 
        <p>
          My current research aims to <span style={italic}>(i)</span> develop a 
          precise account of these notions and their relationship to causation, 
          <span style={italic}> (ii)</span> develop an ethical
          framework that explains their ethical significance, and 
          <span style={italic}> (iii)</span> apply this framework to concrete
           ethical issues, including, for example, self-defense, just 
           war theory, the ethics of abortion, and more. I also plan to extend 
           my current research project to address fundamental issues in 
           political philosophy. 
        </p>
        <p>
          Outside of my current primary research project, I also have research 
          intests in moral semantics, counterfactuals, causation, and applied 
          ethics more generally. 
        </p>
      </section>
      <img src={require("../resources/IMG_02372.png")} alt="David" />
    </div>
  );
}

export default About; 