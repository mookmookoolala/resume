# Resume Site – AWS Static Website Project

Welcome! This is my personal resume/portfolio site, built and deployed on AWS with a creative, sketchbook-inspired design. It's a beginner-friendly project and a fun way to learn about static site hosting, AWS, and a bit of serverless magic.

## Features
- **Static website** hosted on S3
- **Automated CI/CD** with GitHub Actions (S3 sync + CloudFront cache invalidation)
- **Global CDN** with CloudFront
- **Custom domain** via Route53
- **Real visitor counter** using Lambda + DynamoDB
- **Modern, artsy UI** (bold black outlines, blue accents, handwritten headings)

## Architecture
```
[Git Push]
   |
[GitHub Actions CI/CD]
   |
[S3 Bucket (static origin)]
   |
[CloudFront CDN]
   |
[Route53 DNS]
   |
[Browser] <---> [Lambda + DynamoDB] (visitor counter)
```

## Tech Stack
- HTML, CSS (Lexend + Architects Daughter fonts)
- JavaScript
- GitHub Actions (CI/CD Pipeline)
- AWS S3, CloudFront, Route53
- AWS Lambda (Node.js)
- AWS DynamoDB

## How to Use / Deploy
1. **Clone this repo**
2. Edit your site content in `index.html` and `project.html` (project case study)
3. Set up your S3 bucket and CloudFront distribution on AWS
4. Configure GitHub Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `CLOUDFRONT_DISTRIBUTION_ID`)
5. Push to `main` to trigger automated deployment via GitHub Actions
6. Use Route53 to point your custom domain to CloudFront
6. (Optional) Deploy the visitor counter Lambda and DynamoDB table (see `project.html` for code)

## Visitor Counter (Serverless)
- Lambda function increments a count in DynamoDB
- API Gateway exposes the Lambda to your site
- JavaScript fetches and displays the count

## Credits & Inspiration
- Design inspired by sketchbooks and hand-drawn portfolios
- Built for fun, learning, and sharing with my little bro :)

---

Feel free to fork, remix, or use as a template for your own AWS static site!
