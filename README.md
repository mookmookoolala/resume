# Resume Site – AWS Static Website Project

Welcome! This is my personal resume/portfolio site, built and deployed on AWS with a creative, sketchbook-inspired design. It's a beginner-friendly project and a fun way to learn about static site hosting, AWS, and a bit of serverless magic.

## Features
- **Static website** hosted on S3
- **Global CDN** with CloudFront
- **Custom domain** via Route53
- **Real visitor counter** using Lambda + DynamoDB
- **Modern, artsy UI** (bold black outlines, blue accents, handwritten headings)

## Work Experience
- **2024–2025:** Matrixport, DevOps Engineer
- **2025–Present:** SGX, FX Platform Engineer

## Architecture
```
[Browser]
   |
[Route53 DNS]
   |
[CloudFront CDN]
   |
[S3 Bucket (static site)]
   |
[Lambda + DynamoDB] (for visitor counter)
```

## Tech Stack
- HTML, CSS (Lexend + Permanent Marker fonts)
- JavaScript
- AWS S3, CloudFront, Route53
- AWS Lambda (Node.js)
- AWS DynamoDB

## How to Use / Deploy
1. **Clone this repo**
2. Edit your site content in `index.html` and `index3.html` (project blog)
3. Upload to an S3 bucket (enable static website hosting)
4. Set up CloudFront to point to your S3 website endpoint
5. Use Route53 to point your domain to CloudFront
6. (Optional) Deploy the visitor counter Lambda and DynamoDB table (see `index3.html` for code)

## Visitor Counter (Serverless)
- Lambda function increments a count in DynamoDB
- API Gateway exposes the Lambda to your site
- JavaScript fetches and displays the count

## Credits & Inspiration
- Design inspired by sketchbooks and hand-drawn portfolios
- Built for fun, learning, and sharing with my little bro :)

---

Feel free to fork, remix, or use as a template for your own AWS static site!
