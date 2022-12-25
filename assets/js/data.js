const questions = [
    {
        "id"          : 1,
        "quest"    : "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        "option"      : [
                        "Amazon EC2 costs are billed on a monthly basis",
                        "Users retain full administrative access to their Amazon EC2 instances",
                        "Amazon EC2 instances can be launched on demand when needed",
                        "Users can permanently run enough instances to handle peak workloads"
        ],
        "response"    : 3,
        "explanation" : "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
    },
    {
        "id"          : 2,
        "quest"    : "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        "option"      : [
                        "AWS Storage Gateway",
                        "AWS Database Migration Service (AWS DMS)",
                        "Amazon EC2",
                        "Amazon AppStream 2.0"
        ],
        "response"    : 2,
        "explanation" : "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases."
    },
    {
        "id"          : 3,
        "quest"    : "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        "option"      : [
                        "AWS Config",
                        "AWS OpsWorks",
                        "AWS SDK",
                        "AWS Marketplace"
        ],
        "response"    : 4,
        "explanation" : "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        "id"          : 4,
        "quest"    : "Which AWS networking service enables a company to create a virtual network within AWS?",
        "option"      : [
                        "AWS Config",
                        "Amazon Route 53",
                        "AWS Direct Connect",
                        "Amazon Virtual Private Cloud (Amazon VPC)"
        ],
        "response"    : 4,
        "explanation" : "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
    },
    // {
    //     "id"          : 5,
    //     "quest"    : "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    //     "answer1"     : "Configuring third-party applications",
    //     "answer2"     : "Maintaining physical hardware",
    //     "answer3"     : "Securing application access and data",
    //     "answer4"     : "Managing guest operating systems",
    //     "response"    : "2",
    //     "explanation" : "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model."
    // },
    // {
    //     "id"          : 6,
    //     "quest"    : "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    //     "answer1"     : "AWS Regions",
    //     "answer2"     : "Edge locations",
    //     "answer3"     : "Availability Zones",
    //     "answer4"     : "Virtual Private Cloud (VPC)",
    //     "response"    : "2",
    //     "explanation" : "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide."
    // },
    // {
    //     "id"          : 7,
    //     "quest"    : "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    //     "answer1"     : "Use Amazon Cloud Directory",
    //     "answer2"     : "Audit AWS Identity and Access Management (IAM) roles",
    //     "answer3"     : "Enable multi-factor authentication",
    //     "answer4"     : "Enable AWS CloudTrail",
    //     "response"    : "3",
    //     "explanation" : "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
    // },
    // {
    //     "id"          : 8,
    //     "quest"    : "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    //     "answer1"     : "AWS Trusted Advisor",
    //     "answer2"     : "AWS CloudTrail",
    //     "answer3"     : "AWS X-Ray",
    //     "answer4"     : "AWS Identity and Access Management (AWS IAM)",
    //     "response"    : "2",
    //     "explanation" : "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs."
    // },
    // {
    //     "id"          : 9,
    //     "quest"    : "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
    //     "answer1"     : "Amazon Simple Notification Service (Amazon SNS)",
    //     "answer2"     : "AWS CloudTrail",
    //     "answer3"     : "AWS Trusted Advisor",
    //     "answer4"     : "Amazon Route 53",
    //     "response"    : "1",
    //     "explanation" : "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries."
    // },
    // {
    //     "id"          : 10,
    //     "quest"    : "Where can a user find information about prohibited actions on the AWS infrastructure?",
    //     "answer1"     : "AWS Trusted Advisor",
    //     "answer2"     : "AWS Identity and Access Management (IAM)",
    //     "answer3"     : "AWS Billing Console",
    //     "answer4"     : "AWS Acceptable Use Policy",
    //     "response"    : "4",
    //     "explanation" : "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure."
    // },
];