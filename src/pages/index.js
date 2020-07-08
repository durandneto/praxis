import React from "react"
import HomeTemplate from '../components/Templates/Home'

import Layout from "../components/layout"
import SEO from "../components/seo"
const bg = require("../images/bannerPraxisDD-01-01.jpg")
// const bg = "https://praxisinstitute.org/wp-content/uploads/2019/10/Hero-1.png"
const bg2 = "data:image/png;base64,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"

const founders = []
  const pits = [
    {
      title:"PathMaker Neurosystems",
      slug:"PathMaker-Neurosystems",
      description:"PathMaker Neurosystem develops non-invasive neuromodulation devices based on neuronal hyperexcitability suppression for the treatment of serious neurological conditions such as Spasticity and ALS.",
      founders: [{
        name: `Nader Yaghoubi`,
        avatar: require("../images/founders/NaderYaghoubi.headshot.jpg"),
        position: `President, CEO and Co-Founder`,
        linkedin: "https://www.linkedin.com/in/nader-yaghoubi-m-d-ph-d-0bb4849"
      }],
      video: "https://www.youtube.com/embed/TtdrFUW0FJk",
      companyName: "PathMaker Neurosystems",
      linkedin: "https://www.linkedin.com/company/pathmakerneuro",
      twitter: "https://twitter.com/PathMaker_Neuro",
      // email: "nyaghoubi@pmneuro.com",
      email: "email",
      website: "http://www.pmneuro.com",
      growth_story: "https://praxisinstitute.org/news/nader-yaghoubi-pathmaker-neurosystems/",
    },
    {
      title:"Rehabtronics",
      slug:"Rehabtronics",
      description:"Rehabtronics is a neural interface medical device company focused on restoring function and preventing medical complications.",
      founders: [{
        name: `Rahul Samant`,
        avatar: require("../images/founders/REHABTRONICS-Rahul-Samant.jpg"),
        position: `CEO`,
        linkedin: "https://www.linkedin.com/in/rahul-samant-6a852218",
      }],
      video: "https://www.youtube.com/embed/9DLK5ckpLgc",
      companyName: "Rehabtronics",
      linkedin: "https://www.linkedin.com/in/rahul-samant-6a852218",
      growth_story: "https://praxisinstitute.org/news/rehabtronics-helping-therapists-and-patients-with-efficacy-driven-technology-for-recovery/",
      // email: "rahul@rehabtronics.com",
      email: "email",
      website: "http://www.rehabtronics.com"
    },

    {
      title: "BioInteractive Technologies",
      slug: "BioInteractive-Technologies",
      description: "BioInteractive Technologies (BIT), is a health-tech company on a mission to modernize the physical therapy market using our intelligent wearable technology.",
      founders: [{
        name: `Lukas-Karim Merhi`,
        avatar: require("../images/founders/Lukas_BioInteractive.png"),
        position: `CEO and Co-Founder`,
        linkedin: "https://www.linkedin.com/in/lukas-karim-merhi-a0a4298a/",
      },{
        name: `Gautam Sadarangani`,
        avatar: require("../images/founders/Gautam_BioInteractive.jpg"),
        position: `COO and Co-Founder`,
        linkedin: "https://www.linkedin.com/in/gautam-sadarangani-99aab551",
      }],
      video: "https://www.youtube.com/embed/FyLRTt4eGQY",
      companyName: "BioInteractive Technologies",
      growth_story: "https://praxisinstitute.org/news/lukas-karim-merhi-biointeractive-tech/",
      linkedin: "https://www.linkedin.com/company/biointeractive-technologies-inc./",
      twitter: "https://twitter.com/BioIntTech",
      // email: "lukaskarim@biointeractivetech.com",
      email: "email",
      website: "https://tenzr.me/"

    },
    {
      title:"CathBuddy Inc.",
      slug:"CathBuddy-Inc",
      description:"Patented, reusable urinary catheter system that will help catheter users avoid urinary tract infections and improve their overall health.",
      founders: [{
        name: `Souvik Paul`,
        avatar: require("../images/founders/Souvik_CathBuddy.png"),
        position: `Founder`,
        linkedin: "https://www.linkedin.com/in/souvik-paul-cathbuddy"
        // For Daniel Wollin, Chief Medical Advisor: https://www.linkedin.com/in/daniel-wollin-1b1137187/
      },{
        name: `Daniel Wollin`,
        avatar: require("../images/founders/Dan_CathBuddy.jpg"),
        position: `Chief Medical Advisor`,
        linkedin: "https://www.linkedin.com/in/daniel-wollin-1b1137187/"
        // For Daniel Wollin, Chief Medical Advisor: https://www.linkedin.com/in/daniel-wollin-1b1137187/
      }],
      video: "https://www.youtube.com/embed/NZLmWKBvGUE",
      companyName: "CathBuddy Inc.",
      growth_story: "https://praxisinstitute.org/news/in-conversation-souvik-paul-cathbuddy/",
      // email: "souvik@cathbuddy.com",
      twitter: "https://twitter.com/cathbuddyinc",
      email: "email",
      website: "http://www.cathbuddy.com/"
    },
    {
      title:"Dr. Gordon’s Bum Cream",
      slug:"Dr-Gordon-Bum-Cream",
      description:"The only non-prescription, fast-acting, complex-compounded skin cream that effectively treats all symptoms of infectious or non-infectious Moisture Associated Skin Damage (MASD) in a single step. “It’s not just for bums.”",
      founders: [{
        name: `Johanna Mercer`,
        avatar: require("../images/founders/Johanna_BumCream.jpg"),
        position: `CEO`
      },{
        name: `Dr. Ann Gordon`,
        avatar: require("../images/founders/AnnGordon_BumCream.jpg"),
        position: `CTO`
      }],
      // email: "johwho@gmail.com",
      email: "email",
      website: "http://www.drbumcream.com",
      video: "https://www.youtube.com/embed/Ia3kqR8qVgY",
      companyName: "Dr. Gordon’s Bum Cream",
      growth_story: "https://praxisinstitute.org/news/in-conversation-johanna-mercer-dr-ann-gordon/"
    },
  ]

  const HomeTemplateStructure = {
    pits,
    header: {
      title:"Welcome Praxis SCI Accelerate 2020 Demo Day",
      description:"It's with great excitement that we present the 2020 Cohortto you--virtually.",
      location: "",
      bg
    },
    secondSession: {
      title: "These five companies, selected by our world-class research, consumer and commercialization teams, were chosen for their potential to transform the lives of people with spinal cord injuries(SCI).",
      description: ["Each company is at a post-prototype stage with proven traction, and was carefully selected by Praxis' world-class Research, Consumer and Commercialization team."],
      logo: bg2,
    },
    video: {
      video: "https://www.youtube.com/embed/psh_AZloeFM",
      title: "We Selected five companies for you",
      description: "Below, you’ll see the pitches from these amazing companies –before you do, we hope you’ll take a moment to hear from us—and why we do whatwe do."
    }
  }

const IndexPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)


  return (

    <Layout>
      <SEO />
      <HomeTemplate
        {...HomeTemplateStructure}
        controls={{
          loading,
          success
        }}
        onEvent={e => {
          console.log(e)
          switch (true) {
            case e.type === 'CloseContactForm':
            case e.event === 'onClose':
            case e.type === 'CancelContactForm':
                setLoading(false)
                setSuccess(false)
              break
            case e.type === 'SubmitContactForm':
              setLoading(true)

              const formData  = new FormData();
              console.log('e.data', e.data)
              for(const name in e.data) {
                console.log('form data',name)
                  formData.append(name, e.data[name]);
              }

              // fetch('http://localhost:8888/praxis/wp-json/praxis/v1/posts', {
              // fetch('https://sciaccel.praxisinstitute.org/wp-json/praxis/v1/posts', {
              fetch('https://praxisinstitute.org/wp-json/praxis/v1/posts', {
                method: 'POST', // or 'PUT'
                body: formData,
              })
              .then(response => {
                console.log(response)
                setLoading(false)
                setSuccess(true)
              })
              .catch((error) => {
                setLoading(false)
                setSuccess(true)
                console.error('Error:', error);
              });
              break
          }
        }}
      />
    </Layout>
  )
}

export default IndexPage
