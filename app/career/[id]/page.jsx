import CareerDetailsHeader from '@/components/career/career-details-header';
import PostDetails from '@/components/commons/post-details';

const dummyRichtext = `
  <h4>Overview</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, pretium ut ut est massa rhoncus quam libero. 
    Id justo, rutrum magna egestas turpis quam. Lorem velit scelerisque at et. Egestas posuere enim purus 
    mattis dignissim nullam nibh turpis. Elit tortor laoreet erat nulla molestie. Cursus pellentesque nibh 
    cras tempor, vulputate viverra eu, ultricies. Egestas netus nulla vulputate at accumsan, sed orci id. 
    At pellentesque at gravida quam et ornare enim, parturient. Vitae congue erat sollicitudin cras sagittis. 
    Leo auctor elementum iaculis morbi a dictum in sit risus.
  </p>

  <h4>Job Brief</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vel vitae sed amet neque purus neque. 
    Feugiat congue pretium sodales lacinia ut at dui in. Et sem semper tempor, in. Lorem velit pellentesque 
    arcu quis tincidunt et, tempus. Dui aliquet cras sagittis phasellus tempor scelerisque donec ut. 
    Gravida semper felis laoreet purus velit mauris. Lectus cursus ipsum tellus ullamcorper.
  </p>

  <h4>Key Responsibilities</h4>
  <p>
    Elit tortor laoreet erat nulla molestie. Cursus pellentesque nibh cras tempor, vulputate viverra eu, 
    ultricies. Egestas netus nulla vulputate at accumsan, sed orci id. At pellentesque at gravida quam 
    et ornare enim, parturient. Vitae congue erat sollicitudin cras sagittis. Leo auctor elementum iaculis 
    morbi a dictum in sit risus.
  </p>
  <ul>
    <li>Lectus gravida sed cras tempus pretium dolor tempor hendrerit.</li>
    <li>Lobortis in mi ac leo ullamcorper commodo quis diam quis.</li>
    <li>Semper purus mauris tempus auctor sed tincidunt ornare.</li>
    <li>Purus eget nisi dictum egestas aliquam viverra amet.</li>
    <li>Volutpat nec odio proin id porttitor ipsum metus ultrices velit.</li>
    <li>Et ut sit pellentesque morbi pretium.</li>
    <li>Nibh eget adipiscing amet eget tempus ac.</li>
  </ul>

  <h4>Skill Requirements</h4>
  <p>
    Elit tortor laoreet erat nulla molestie. Cursus pellentesque nibh cras tempor, vulputate viverra eu, 
    ultricies. Egestas netus nulla vulputate at accumsan, sed orci id. At pellentesque at gravida quam 
    et ornare enim, parturient. Vitae congue erat sollicitudin cras sagittis.
  </p>
  <ul>
    <li>Lectus gravida sed cras tempus pretium dolor tempor hendrerit.</li>
    <li>Lobortis in mi ac leo ullamcorper commodo quis diam quis.</li>
    <li>Semper purus mauris tempus auctor sed tincidunt ornare.</li>
    <li>Purus eget nisi dictum egestas aliquam viverra amet.</li>
    <li>Volutpat nec odio proin id porttitor ipsum metus ultrices velit.</li>
    <li>Et ut sit pellentesque morbi pretium.</li>
    <li>Nibh eget adipiscing amet eget tempus ac.</li>
  </ul>

  <h4>Educational Requirements</h4>
  <p>
    Graduation in any engineering discipline is preferred. However, we are looking for skills, not degrees.
  </p>

  <h4>Salary</h4>
  <p>Negotiable.</p>

  <h4>Compensation &amp; Other Benefits</h4>
  <p>As per company policy.</p>

  <a class="btn-transparent text-uppercase" href="/career/apply/1">
    <span>Apply Now</span>
  </a>
`;

export default function CareerDetailsPage() {
   return (
      <section className="insights-description-wrapper careeer-details-wrapper bg-white">
         <div className="container">
            <CareerDetailsHeader
               headingDetails={{
                  title: 'Healthcare Promotion Officer',
                  location: 'Dhaka',
                  deadline: '20 Aug 2023',
                  vacancies: 1,
                  applyLink: '/career/apply/1',
               }}
            />
         </div>
         <PostDetails dummyRichtext={dummyRichtext} />
      </section>
   );
}
