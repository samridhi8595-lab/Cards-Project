
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.acaprime.com/wp-content/uploads/2015/11/Microsoft-Logo-3-832x1024.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://m.media-amazon.com/images/I/31jETLYSceL._AC_UF350,350_QL80_.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer – Automation",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSat5-pq6egsEtssPXG61zCMbKi1EPhbVoIPg&s",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    companyName: "IBM",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 30,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOIExes7SkKMj61zdgksPGqTv-mIEPVod6w&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Java Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 42,
    location: "Mumbai, India"
  }
];

  return (
    
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay}/>
      })}
      
    </div>
  )
}

export default App
