import TeamCard from '@components/teamCard';

export default function AlumniPage() {
  return (
    <main>
      <h1>Alumni</h1>
      <TeamCard
        name="Erika Womack, PhD"
        title="Scientist"
        image="/headshots/Erika-headshot.jpg"
        bio={`I grew up in Cleveland, MS (home of the Fighting Okra, yes look it up). I attended Mississippi State University for my undergraduate degree in Biological 
        Sciences and Mississippi College for my master's degree in Biomedical Sciences. I have worked for the University of Mississippi Medical Center (UMMC) as a 
        researcher for 7 years studying adolescent pediatric scoliosis in the pediatric population before returning to Mississippi State University for my doctorate 
        degree in molecular biology and biochemistry. I worked for the USDA-ARS as a post-doctoral f ellow for 3 years as a geneticist prior to joining Dr. Yarar-Fisher's 
        team where I am the laboratory manager and a researcher. Dr. Yarar-Fisher's program investigating spinal cord injury compliments some techniques that I have learned 
        along my academic and professional career but, most importantly, has encompassed many new and exciting disciplines and techniques including bioinformatics, 
        tissue culture, RNAseq, metabolic profiling, immunohistochemistry, and other procedures to study individuals with SCI. As a researcher, I contribute to running 
        experiments, data analysis and writing and editing of manuscripts. My laboratory manager duties include keeping the laboratory safe and legal, reconciliation of 
        accounts, and mentorship and training of physicians and medical, physical therapy, undergraduate, and high school students in the laboratory. Some of my interests 
        outside of the lab include playing sports, hanging out with family and friends, home improvement, traveling domestically to explore different cities along with 
        their food and culture, tailgating, and relaxing.`}
      />
      <TeamCard
        name="Miles Grigorian"
        title="PhD Student"
        image="/headshots/Miles-headshot.jpg"
        bio={`I am a 4th year post-doctoral scholar at Rehabilitation Medicine Laboratory. I am from China, and I earned my master's degree in Molecular Genetics 
        from the University of Cincinnati and my PhD degree in Nutrition Sciences from Purdue University. During my PhD training, I was involved with clinical trials 
        investigating several aspects of dietary components on metabolic health outcomes. I greatly appreciated the applicability of human clinical nutrition research. 
        In the meanwhile, I became interested in exploring the underlying mechanisms for the development of cardio-metabolic diseases. I joined Dr. Yarar-Fisher's lab 
        in 2017 to further expand my training in nutrition research and gain additional skillset in microbiome and metabolomics analyses. My current research projects 
        include: 1) investigating the effects of a high-protein/low-carbohydrate diet on body composition, metabolic health, and gut microbiome in patients with 
        long-standing spinal cord injury and 2) understanding the relationship between gut microbiome and glucose control in individuals with SCI supported by the
         NIDILRR Mary Switzer Research fellowship and Craig Nielsen Foundation postdoctoral fellowship. I love spending time with my family, cooking cuisines from across 
         the world, and traveling.`}
      />
      <TeamCard
        name="Zoe Samira Evans"
        title="Student Intern"
        image="/headshots/Zoe-headshot.jpg"
        bio={`I am a native of Bessemer, AL and I attend Lawson State Community College in Birmingham, AL where my major is Biology. Throughout high school, I was involved 
        in many activities including the marching and concert bands, captain of cheerleading team, beta club, FBLA, and Student Government Association. In college, I am 
        a cheerleader, an ambassador, and I am involved in the STEM Program which has allotted the opportunity of receiving an internship through UAB's Blazing to Biomedical 
        Careers (BBC) program as part of a NIH initiative to lessen disparities. This program provides an entrance into advanced biomedical research careers. The internship 
        led me to join Dr. Yarar's lab for the summer. I felt her lab would provide guidance into a biomedical career as I hope to become a laboratory personnel or occupational 
        therapist one day. Joining Dr. Yarar-Fisher's lab has allowed me to explore both laboratory and clinical research to help guide my future options. My hobbies include 
        cheering, shopping, eating, reading, and going to church.`}
      />
      <TeamCard
        name="Sarah Taylor"
        title="Visiting Student"
        image="/headshots/Sarah-headshot.jpg"
        bio={`I am a pre-med student at Wake Forest University in Winston-Salem, NC majoring in Health and Exercise Science with minors in Chemistry and Bioethics. I am 
        originally from Birmingham, AL, and I graduated from Mountain Brook High School in 2019. My undergraduate courses in Health and Exercise Science have led me to 
        become more interested in the role of nutrition and exercise in health and disease, which is what prompted me to join Dr. Yarar-Fisher's lab. I love being a part 
        of this lab because I am able to learn more about basic science research techniques, while I am also able to experience the clinical side of research and get a 
        glimpse into the tangible effects this research can have on individuals. Outside of school, I love playing tennis, running, cooking and baking, traveling, and 
        exploring Birmingham's amazing restaurants with my family and friends!`}
      />
      <TeamCard
        name="Mualla Eraslan"
        title="Laboratory Manager"
        image="/headshots/Mualla-headshot.png"
        bio={`I received my first B.S. degree in chemistry education from Hacettepe University in Turkey. Following my undergraduate education I worked as a Histo-technologist 
        at Boston University Medical Center's Anatomic Pathology Lab for 12 years. Specifically, I worked in immunohistochemistry, histology, cytology, and molecular diagnostic 
        laboratories. While working as a Histo-technologist I earned my second B.S. degree in Biomedical Sciences and Clinical Laboratories from Boston University. I moved to 
        Birmingham in August 2014 to get my Master's Degree in Biotechnology at UAB, which I received in August 2015. Following my Master's Degree I joined Dr. Yarar-Fisher's 
        laboratory as a laboratory manager. My current projects investigate the effects of long-term neuromuscular electrical stimulation and high protein diet on metabolic and 
        hypertrophic signaling in the paralyzed muscle.`}
      />
      <TeamCard
        name="Hatice Cetin"
        title="Erasmus Research Scholar"
        image="/headshots/Hatice-headshot.jpg"
        bio={`I received my B.S degree in Physical Therapy and Rehabilitation from Hacettepe University in Turkey. Following graduation, I started working as a research assistant 
        at Hacettepe University in 2013. I completed my Master's degree in June, 2016. The focus of my thesis was investigating the effect of exercise after radiofrequency 
        denervation in patients with facet joint syndromme. I am still working at the same university as a research assistant while pursuing a PhD in Rehabilitation Science. 
        My research focus is on spinal cord and traumatic brain injury rehabilitation. I joined Dr. Ceren Yarar-Fisher's lab in September, 2017, and I'm currently studying 
        the effects of neuromuscular electrical stimulation on muscle metabolism in individuals with sub-acute spinal cord injury.`}
      />
    </main>
  );
}
