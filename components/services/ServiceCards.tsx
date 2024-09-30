// components/ServiceCards.js
"use client";

import { useState } from "react";
import { Button } from "../ui/MovingBorders";
import Modal from "../ui/Modal"; // Import the Modal component


interface Service {
  id: number;
  title: string;
  description: string;
  detailedInfo: React.ReactNode; // Allows JSX elements
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build your company's most amazing websites to showcase your brand, services, and products. Our goal is to present your best image online!",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Web Development</strong> services are tailored to meet your business needs. We specialize in creating responsive, user-friendly websites that not only look great but also perform exceptionally.
        </p>
        <h3 className="text-xl font-semibold mb-2">Technologies We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>GraphQL</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
        <p>
          We follow a <em>user-centric</em> approach, ensuring that your website not only meets but exceeds your expectations. From initial design to deployment and maintenance, we are with you every step of the way.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Software Engineering",
    description:
      "We develop custom software solutions for your business, handling everything from small projects to large-scale applications.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Software Engineering</strong> team is dedicated to building robust, scalable, and efficient software solutions that drive your business forward.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services Offered:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Custom Application Development</li>
          <li>API Development and Integration</li>
          <li>Database Design and Management</li>
          <li>Cloud Solutions</li>
          <li>DevOps and CI/CD Pipelines</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Why Choose Us:</h3>
        <p>
          We prioritize <em>quality</em> and <em>innovation</em>, ensuring that our solutions are not only effective but also future-proof. Our team stays updated with the latest technologies to provide you with cutting-edge solutions.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We create intuitive and engaging user interfaces and experiences that delight your customers and enhance your brand.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>UI/UX Design</strong> services focus on delivering seamless and enjoyable user experiences. We combine aesthetics with functionality to create designs that resonate with your target audience.
        </p>
        <h3 className="text-xl font-semibold mb-2">Design Process:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>User Research and Analysis</li>
          <li>Wireframing and Prototyping</li>
          <li>Visual Design</li>
          <li>Usability Testing</li>
          <li>Iterative Improvements</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Tools We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Sketch</li>
          <li>InVision</li>
          <li>Axure RP</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "We develop high-performance mobile applications for both iOS and Android platforms, ensuring a seamless experience across devices.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Mobile App Development</strong> services cover the entire lifecycle of your app, from concept and design to development and deployment. We ensure your app is fast, reliable, and user-friendly.
        </p>
        <h3 className="text-xl font-semibold mb-2">Platforms We Develop For:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>iOS (Swift, Objective-C)</li>
          <li>Android (Kotlin, Java)</li>
          <li>Cross-Platform (React Native, Flutter)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Responsive Design</li>
          <li>Push Notifications</li>
          <li>In-App Purchases</li>
          <li>Offline Functionality</li>
          <li>Integration with APIs and Third-Party Services</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description:
      "We build robust e-commerce platforms that drive sales and provide exceptional shopping experiences for your customers.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>E-commerce Solutions</strong> are designed to help you establish a strong online presence. We focus on creating secure, scalable, and user-friendly online stores that cater to your business needs.
        </p>
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Customizable Product Pages</li>
          <li>Secure Payment Gateways</li>
          <li>Inventory Management</li>
          <li>Customer Reviews and Ratings</li>
          <li>SEO Optimization</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Platforms We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Shopify</li>
          <li>WooCommerce</li>
          <li>Magento</li>
          <li>BigCommerce</li>
          <li>Custom Solutions</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "We create and execute digital marketing strategies that increase your online visibility and drive traffic to your website.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Digital Marketing</strong> services are designed to help you reach your target audience effectively. We use a combination of strategies to enhance your online presence and boost your business growth.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services Offered:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Search Engine Optimization (SEO)</li>
          <li>Pay-Per-Click (PPC) Advertising</li>
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
          <li>Content Marketing</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
        <p>
          We develop customized marketing strategies based on your business goals and target audience. Our data-driven approach ensures that your marketing campaigns are effective and yield measurable results.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize your website to rank higher on search engines, increasing organic traffic and improving your online visibility.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Search Engine Optimization (SEO)</strong> services focus on improving your website`'s visibility on search engines like Google. We implement best practices to help your site rank higher for relevant keywords.
        </p>
        <h3 className="text-xl font-semibold mb-2">SEO Services:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Keyword Research and Analysis</li>
          <li>On-Page Optimization</li>
          <li>Technical SEO</li>
          <li>Link Building</li>
          <li>Local SEO</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Why SEO Matters:</h3>
        <p>
          SEO is crucial for driving organic traffic to your website. Higher rankings lead to increased visibility, credibility, and ultimately, more conversions and sales.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Cloud Services",
    description:
      "We offer cloud-based solutions that enhance your application's scalability, reliability, and performance.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Cloud Services</strong> provide scalable and secure solutions for your business needs. Whether you`'re migrating to the cloud or optimizing your existing infrastructure, we`'ve got you covered.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services Offered:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Cloud Migration</li>
          <li>Cloud Architecture Design</li>
          <li>Managed Cloud Services</li>
          <li>Disaster Recovery Solutions</li>
          <li>Cost Optimization</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Platforms We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Amazon Web Services (AWS)</li>
          <li>Microsoft Azure</li>
          <li>Google Cloud Platform (GCP)</li>
          <li>Heroku</li>
          <li>DigitalOcean</li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    title: "DevOps and CI/CD",
    description:
      "We implement DevOps practices and Continuous Integration/Continuous Deployment pipelines to streamline your development process.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>DevOps and CI/CD</strong> services aim to bridge the gap between development and operations, ensuring faster and more reliable software delivery.
        </p>
        <h3 className="text-xl font-semibold mb-2">DevOps Services:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Infrastructure as Code (IaC)</li>
          <li>Automated Testing</li>
          <li>Continuous Integration (CI)</li>
          <li>Continuous Deployment (CD)</li>
          <li>Monitoring and Logging</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Tools We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Jenkins</li>
          <li>GitHub Actions</li>
          <li>Travis CI</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </>
    ),
  },
  {
    id: 10,
    title: "Maintenance and Support",
    description:
      "We provide ongoing maintenance and support to ensure your website and applications run smoothly and stay up-to-date.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Maintenance and Support</strong> services are designed to keep your digital assets running efficiently. We handle updates, bug fixes, performance optimizations, and more.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services Offered:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Regular Software Updates</li>
          <li>Bug Fixing and Troubleshooting</li>
          <li>Performance Monitoring</li>
          <li>Security Audits and Enhancements</li>
          <li>User Support and Training</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Why Maintenance Matters:</h3>
        <p>
          Regular maintenance ensures that your website and applications remain secure, performant, and aligned with your evolving business needs. It helps prevent downtime and extends the lifespan of your digital investments.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Content Management Systems (CMS)",
    description:
      "We implement and customize CMS platforms that allow you to manage your website content effortlessly.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>Content Management Systems (CMS)</strong> services enable you to easily update and manage your website content without technical expertise. We customize CMS platforms to fit your specific needs.
        </p>
        <h3 className="text-xl font-semibold mb-2">CMS Platforms We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>WordPress</li>
          <li>Drupal</li>
          <li>Joomla</li>
          <li>Contentful</li>
          <li>Strapi</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Our Services:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>CMS Installation and Configuration</li>
          <li>Custom Theme and Plugin Development</li>
          <li>User Training and Documentation</li>
          <li>Migration from Existing CMS</li>
          <li>CMS Optimization and Security</li>
        </ul>
      </>
    ),
  },
  {
    id: 12,
    title: "API Development and Integration",
    description:
      "We develop robust APIs and integrate third-party services to enhance your application's functionality.",
    detailedInfo: (
      <>
        <p className="mb-4">
          Our <strong>API Development and Integration</strong> services ensure that your applications can communicate effectively with other systems. We build scalable APIs and integrate various third-party services to extend your application`'s capabilities.
        </p>
        <h3 className="text-xl font-semibold mb-2">API Services:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>RESTful API Development</li>
          <li>GraphQL API Development</li>
          <li>API Documentation and Testing</li>
          <li>Third-Party API Integration</li>
          <li>API Security and Authentication</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Technologies We Use:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Apollo Server</li>
          <li>Swagger</li>
          <li>Postman</li>
        </ul>
      </>
    ),
  },
];

const ServiceCards = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="projects">
      <div className="relative py-8">
        <h1 className="heading">
          A menu of <span className="text-purple">our services</span>
        </h1>
        <p className="text-center">Below is a selection of our services, please click on a card to get more detailed information about the service.</p>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-8">
          <div className="w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {services.map((service) => (
              <Button
                key={service.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {service.title}
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        title={selectedService?.title}
      >
        <p className="text-gray-700 dark:text-gray-300">
          {selectedService?.detailedInfo}
        </p>
        {/* Add more detailed content as needed */}
      </Modal>
    </section>
  );
};

export default ServiceCards;
