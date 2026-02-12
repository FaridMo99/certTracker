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
  certName:"awsSaa",
  lessonAmount: 366,
  initialCount: 326,
  categories: [
    { name: "Introduction", done: true },
    { name: "Fundamentals", done: true },
    { name: "AWS Accounts", done: true },
    { name: "IAM", done: true },
    { name: "S3", done: true },
    { name: "VPC Basics", done: true },
    { name: "EC2 Basics", done: true },
    { name: "ECS", done: true },
    { name: "Advanced EC2", done: true },
    { name: "Route 53", done: true },
    { name: "RDS", done: true },
    { name: "Network Storage & Data Lifecycle", done: true },
    { name: "HA & Scaling", done: true },
    { name: "Serverless & App Services", done: true },
    { name: "CDN", done: true },
    { name: "Advanced VPC", done: true },
    { name: "Hybrid Environment & Migration", done: true },
    { name: "Security and CI/CD", done: true },
    { name: "IaC", done: false },
    { name: "NoSQL", done: false },
    { name: "ML", done: true },
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