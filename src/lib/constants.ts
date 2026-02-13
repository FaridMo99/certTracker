import ec2InstanceTypes from "../assets/ec2instanceTypes.png";
import ebsOptions from "../assets/ebsOptions.png";
import errorCodes from "../assets/errorCodes.png";
import type { CantrillAwsProps, Skill } from "./types";

export const skills: Skill[] = [
  {
    title: "AWS Solutions Architect Associate",
    path: "awsSaa",
  },
  {
    title: "AWS Developer Associate",
    path: "awsDva",
  },
  {
    title: "HashiCorp Terraform Associate",
    path: "hcTfA",
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    path: "ckad",
  },
];

export const AWS_SAA: CantrillAwsProps = {
  certName: "awsSaa",
  lessonAmount: 365,
  initialCount: 0,
  categories: [
    { name: "Introduction", done: false },
    { name: "Fundamentals", done: false },
    { name: "AWS Accounts", done: false },
    { name: "IAM", done: false },
    { name: "S3", done: false },
    { name: "VPC Basics", done: false },
    { name: "EC2 Basics", done: false },
    { name: "ECS", done: false },
    { name: "Advanced EC2", done: false },
    { name: "Route 53", done: false },
    { name: "RDS", done: false },
    { name: "Network Storage & Data Lifecycle", done: false },
    { name: "HA & Scaling", done: false },
    { name: "Serverless & App Services", done: false },
    { name: "CDN", done: false },
    { name: "Advanced VPC", done: false },
    { name: "Hybrid Environment & Migration", done: false },
    { name: "Security and CI/CD", done: false },
    { name: "IaC", done: false },
    { name: "NoSQL", done: false },
    { name: "ML", done: false },
    { name: "Exam", done: false },
  ],
  images: [ec2InstanceTypes, ebsOptions, errorCodes],
};

export const AWS_DVA: CantrillAwsProps = {
  certName: "awsDva",
  initialCount: 0,
  lessonAmount: 10000,
  images: [""],
  categories: [{ name: "", done: false }],
};