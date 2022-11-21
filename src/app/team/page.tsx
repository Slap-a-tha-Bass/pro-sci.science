import TeamCard from '@components/teamCard';

export default function TeamPage() {
  return (
    <main className="text-content">
      <h1>Team</h1>
      <TeamCard
        name="Ceren Yarar-Fisher, PhD"
        title="Principal Investigator"
        image="/headshots/Ceren-headshot.jpg"
        bio={`Dr. Yarar-Fisher is an Associate Professor at the UAB Department of Physical Medicine and Rehabilitation in the UAB Heersink School of Medicine. 
        Her translational research program focuses on understanding the pathophysiology of traumatic spinal cord injury (SCI) in the acute and chronic stages 
        with the purpose of developing novel dietary and rehabilitation strategies to improve neuro-recovery, metabolism, and bowel function. Thus, her laboratory 
        is currently developing and testing therapeutic diets and electrical stimulation programs to evaluate new ways to prevent neuronal death and promote recovery 
        and function in the acute stages and improve body composition, gut microbiome composition, and skeletal muscle and metabolic health in the chronic stages of 
        SCI. She has received several NIH and NIDILRR funding to support her investigations in SCI. She recently selected as one of the 10 Outstanding Young Persons 
        of Turkey by Junior Chamber International for her work in Academic leadership and/or accomplishment. She served two years as Treasurer, Chair-Elect, and Chair 
        in American Congress of Rehabilitation Medicine (ACRM) SCI-Special Interest Group, and is a member of ACRM, Academy of Spinal Cord Injury Professionals, American 
        College of Sports Medicine and American Physiological Society. Dr. Yarar-Fisher has had the privilege of mentoring a wide variety of students and trainees, 
        including 3 high school students, 5 medical students, 3 Physical Medicine and Rehabilitation residents, 10 physical therapy students, 2 doctoral students, 
        and 1 post-doctoral trainee. She has also mentored 4 international visiting doctoral students and 2 visiting faculty from Hacettepe University/Turkey via Erasmus 
        International Credit Mobility Program. Among her students, over 70% are racial ethnic minorities.`}
      />
      <TeamCard
        name="Jia Li, PhD"
        title="Scientist"
        image="/headshots/Jia-headshot.jpg"
        bio={`I am a 4th year post-doctoral scholar at Rehabilitation Medicine Laboratory. I am from China, and I earned my master's degree in Molecular Genetics from the 
      University of Cincinnati and my PhD degree in Nutrition Sciences from Purdue University. During my PhD training, I was involved with clinical trials investigating 
      several aspects of dietary components on metabolic health outcomes. I greatly appreciated the applicability of human clinical nutrition research. In the meanwhile, 
      I became interested in exploring the underlying mechanisms for the development of cardio-metabolic diseases. I joined Dr. Yarar-Fisher's lab in 2017 to further expand
      my training in nutrition research and gain additional skillset in microbiome and metabolomics analyses. My current research projects include: 1) investigating the 
      effects of a high-protein/low-carbohydrate diet on body composition, metabolic health, and gut microbiome in patients with long-standing spinal cord injury and 2) 
      understanding the relationship between gut microbiome and glucose control in individuals with SCI supported by the NIDILRR Mary Switzer Research fellowship and Craig 
      Nielsen Foundation postdoctoral fellowship. I love spending time with my family, cooking cuisines from across the world, and traveling.`}
      />
      <TeamCard
        name="Amal Alharbi"
        title="PhD Student"
        image="/headshots/Amal-headshot.jpg"
        bio={`I received my Bachelor's degree from KSU in Saudi Arabia, and my Master of Science degree in the neuromuscular field from the University of Pittsburgh, 
        Pennsylvania in 2016. I have worked as a physical therapist with a focus on neurological rehabilitation and as a TA at Qassim University. Currently, I am a 
        doctoral student in the Rehabilitation Science Program at UAB, and I joined Dr. Yarar-Fisher's lab in Fall 2019. My primary research interest is investigating 
        the effects of neuromuscular electrical stimulation on muscle activity and metabolic health after SCI. My future goal is to be an educator and researcher in 
        Neuromuscular Physical Therapy with a focus on Neurological Rehabilitation. In my spare time, I like spending time doing outdoor activities with my kids, 
        hanging out with my friends, cooking new recipes, and swimming.`}
      />
    </main>
  );
}
