import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100,
  message: { error: 'Too many requests from this IP, please try again later.' },
});
app.use('/api', apiLimiter);

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', service: 'MyRecruit Ltd API', timestamp: new Date() });
});

// Mock/In-memory store for demonstration
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: Date;
}

interface WorkerApplication {
  id: string;
  fullName: string;
  dob: string;
  nationality: string;
  passportNumber: string;
  phone: string;
  email: string;
  currentCountry: string;
  fieldOfInterest: string;
  yearsExperience: string;
  additionalInfo?: string;
  submittedAt: Date;
}

interface EmployerRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  numberOfWorkers: string;
  positions: string;
  requiredSkills?: string;
  minExperience?: string;
  startDate?: string;
  salaryRange?: string;
  accommodation?: string;
  preferredCountry?: string;
  additionalInfo?: string;
  submittedAt: Date;
}

const contactSubmissions: ContactSubmission[] = [];
const workerApplications: WorkerApplication[] = [];
const employerRequests: EmployerRequest[] = [];

// Route 1: Contact
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const record: ContactSubmission = {
    id: `cnt_${Date.now()}`,
    name,
    email,
    phone,
    subject,
    message,
    submittedAt: new Date(),
  };
  contactSubmissions.push(record);
  console.log('[Contact Submission Received]:', record);

  return res.status(201).json({
    success: true,
    message: 'Your message has been received. Our team will contact you shortly.',
    id: record.id,
  });
});

// Route 2: Worker Application
app.post('/api/apply', (req: Request, res: Response) => {
  const {
    fullName,
    dob,
    nationality,
    passportNumber,
    phone,
    email,
    currentCountry,
    fieldOfInterest,
    yearsExperience,
    additionalInfo,
  } = req.body;

  if (!fullName || !email || !phone || !nationality || !passportNumber) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  const record: WorkerApplication = {
    id: `wrk_${Date.now()}`,
    fullName,
    dob,
    nationality,
    passportNumber,
    phone,
    email,
    currentCountry,
    fieldOfInterest,
    yearsExperience,
    additionalInfo,
    submittedAt: new Date(),
  };
  workerApplications.push(record);
  console.log('[Worker Application Received]:', record);

  return res.status(201).json({
    success: true,
    message: 'Application registered successfully. Free for workers.',
    id: record.id,
  });
});

// Route 3: Employer Request
app.post('/api/request-workers', (req: Request, res: Response) => {
  const {
    companyName,
    contactPerson,
    email,
    phone,
    industry,
    numberOfWorkers,
    positions,
    requiredSkills,
    minExperience,
    startDate,
    salaryRange,
    accommodation,
    preferredCountry,
    additionalInfo,
  } = req.body;

  if (!companyName || !contactPerson || !email || !phone || !industry || !numberOfWorkers) {
    return res.status(400).json({ error: 'Please fill in all mandatory fields.' });
  }

  const record: EmployerRequest = {
    id: `emp_${Date.now()}`,
    companyName,
    contactPerson,
    email,
    phone,
    industry,
    numberOfWorkers,
    positions,
    requiredSkills,
    minExperience,
    startDate,
    salaryRange,
    accommodation,
    preferredCountry,
    additionalInfo,
    submittedAt: new Date(),
  };
  employerRequests.push(record);
  console.log('[Employer Request Received]:', record);

  return res.status(201).json({
    success: true,
    message: 'Workforce request registered. Our recruitment specialist will follow up.',
    id: record.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
