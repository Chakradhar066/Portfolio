import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Highly qualified Data Engineer with 5+ years of experience in the indus-try. Enjoy creative problem solving and getting exposure on multiple pro-jects, and I would excel in the collaborative environment on which your company prides itself.`;

export const ABOUT_TEXT = `Results-driven Data Engineer with 5+ years of experience in design-ing and implementing robust data solutions to drive business insights and enhance data-driven decision-making. Expert in utilizing Spark SQL, Spark Streaming, hands-on experience with Azure SQL Database, Azure SQL Data Warehouse, Azure Analysis Services, HDInsight, Azure Data Lake, and Azure Data Factory. Working knowledge of HDFS, Kafka, Map Reduce, Spark, PIG, HIVE, Sqoop, HBase, Flume, and Zookeeper, Hands-on experience with GCP, BigQuery, GCS, Cloud Functions, Cloud Dataflow, Pub/Sub, Cloud Shell, GSUTIL, bq command-line utilities, and Data Proc`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Present",
    role: "Azure Data Engineer",
    company: "INVISTA, Wichita, Kansas, U.S",
    description: `Successfully developed, automated and maintained scalable data pipelines using Prophecy, ensuring data quality and integrity. Worked closely with cross-functional teams to implement data solutions using Prophecy. Developed business logic using Kafka & Spark Streaming and implemented business transformations. Additionally, I leading the migration of legacy systems into an Enterprise data lake built on Azure Cloud. Developed workflows using Oozie for executing MapReduce jobs and Hive queries.`,
    technologies: ["Spark", "Airflow", "AWS", "Azure", "Python", "MySQL", "Tableau", "Jenkins", "Prophecy"],
  },
  {
    year: "Nov 2022 - Jun 2023",
    role: "AWS Data Engineer",
    company: "Koch Industries, Topeka, Wichita, U.S",
    description: `Developed AWS Lambda functions in Spark with cross-functional dependencies, creating custom libraries for cloud delivery, used Python libraries, such as BEAUTIFUL SOUP, to extract data from websites, wrote and executed MySQL database queries from Python using the Python-MySQL connector and MySQL dB package. performed data wrangling tasks, automated and monitored AWS infrastructure using Terraform to achieve high availability and reliability`,
    technologies: ["HDFS", "Scala", "Kafka", "Oracle", "Zookeeper", "AWS S3", "Jira", "Scrum"],
  },
  {
    year: "Apr 2021 - Aug 2022",
    role: "Data Engineer",
    company: "Tata Consultancy Services, Hyderabad, India ",
    description: `Involved in the entire lifecycle of projects, including design, development, deployment, testing, implementation, and support. Created Session Beans and controller servlets to manage HTTP requests within a Talend. I worked on Big Data Integration & Analytics based on Hadoop, SOLR, PySpark, Kafka, Storm and web Methods. Conducted performance tuning and optimization of Kubernetes and Docker deployments`,
    technologies: ["Hadoop", "Hbase", "PySpark", "MongoDB", "Elastic Search", "Oozie", "DB2"],
  },
  {
    year: "Sep 2020 - Mar 2021",
    role: "GCP Data Engineer",
    company: "BRR Software Systems , Hyderabad, India ",
    description: `Developed Pyspark script to merge static and dynamic files, cleanse the data and created the date frames and worked on transformations. Migrated an entire Oracle database to BigQuery and utilized Power BI for reporting purposes. Worked on analysing the data using Pyspark, Hive, bases on ETL mappings. Storing data files in Google Cloud 53 Buckets daily basis, Using Data Proc, Big Query to develop and maintain GCP cloud base solutions.`,
    technologies: ["GCP", "GCS", "Hive", "Snowflake", "DynamoDB", "PowerBI", "SDK's", "DataFlow", "EMRCluster", "Synapse"],
  },
  {
    year: "Mar 2019 - Jul 2020",
    role: "Data Engineer",
    company: "Puma Energy, Mumbai, India ",
    description: `Planned and defined system requirements to Use Case, Use Case Scenario and Use Case Narrative using the UML methodologies. Worked with supporting business analysis and marketing campaign analytics with data mining, data processing, and investigation to answer complex business questions. Written custom spark programs to track job performance overtime and keep track of the total size of the ETL with respect to the size of the tables.`,
    technologies: ["Spark", "Scala", "AWS S3", "Teradata", "Tableau", "PySpark"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "12341 Mackey Street, Overland Park, Kansas, 66213 ",
  phoneNo: "+1(571)-342-8604 ",
  email: "chakradharj96@gmail.com",
};
