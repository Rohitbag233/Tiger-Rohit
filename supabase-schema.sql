-- Supabase Database Schema for Rohit's Portfolio Website
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create life story sections table
CREATE TABLE IF NOT EXISTS life_story_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create advice museum entries table
CREATE TABLE IF NOT EXISTS advice_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  advice_text TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_context TEXT,
  is_approved BOOLEAN DEFAULT false,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image_url TEXT,
  project_url TEXT,
  github_url TEXT,
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active', -- active, completed, archived
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team members table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  order_index INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_advice_entries_approved ON advice_entries(is_approved);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured, order_index);
CREATE INDEX IF NOT EXISTS idx_life_story_order ON life_story_sections(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE life_story_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE advice_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view published life story sections"
  ON life_story_sections FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view approved advice entries"
  ON advice_entries FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Public can submit advice entries"
  ON advice_entries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view active team members"
  ON team_members FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can send contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can view site settings"
  ON site_settings FOR SELECT
  USING (true);

-- Insert default data
INSERT INTO site_settings (key, value) VALUES
  ('hero_title', '"Rohit Bag"'),
  ('hero_subtitle', '"Building for people, not just metrics."'),
  ('hero_description', '"Creator • Founder • Builder — Mumbai. Obsessed with making ideas that scale and give people real opportunity."'),
  ('stats', '{"companies_founded": 2, "day_vlog_challenge": "200+", "subscriber_goal": "1M", "investment_strategy": "SIP"}'),
  ('values', '["Innovation", "Kindness", "Obsession", "Legacy"]')
ON CONFLICT (key) DO NOTHING;

-- Insert Rohit's life story sections
INSERT INTO life_story_sections (title, content, order_index) VALUES
  ('The Beginning (Age 4)', 'When I was in 4th standard, I experienced something that changed my life forever. One night, when nobody was around - not even the watchman - I saw a luxurious car (later I learned it was an Audi R8) parked in front of my building. A stranger emerged from the car and took me on a 4-5 hour night trip through Mumbai. Though I don''t remember all the details, that conversation opened my eyes to reality and sparked a fire in me - I decided I had to do something meaningful with my life.', 1),
  ('Discovery of Science & The Broken Arm', 'After that night, I started exploring everything. My neighbor Satish was the first person in our building to have Wi-Fi and a laptop. I used to visit his house to explore the internet and discovered this "magical thing" called science through YouTube videos. My imagination was incredibly strong - I could visualize anything. But then tragedy struck: I broke my left elbow in the village, stayed home for 3 months, and became introverted. The bullying that followed when I returned gave me another kick - I had to become someone respected.', 2),
  ('First Co-Founder & Biology Fuel (2019)', 'In 7th standard, August 2019, I found my best friend who became my first co-founder. I read a research paper about converting waste plastic into petrol. We decided to commercialize it. My tuition teacher believed in us and gave us ₹5,000. We successfully made 100ml of petrol from 5kg of waste plastic. But my dad demotivated me, saying we were from a small family and couldn''t do these things. We abandoned the idea.', 3),
  ('The Hyperloop Idea & Betrayal', 'Around September of the next year, I got an idea for a revolutionary hyperloop technology. My co-founder Sujan and I worked for 1.5 months and figured out a system that could travel at 3,200 km/h with 1/10th the maintenance cost and 1/100th operational cost compared to existing hyperloop ideas. Our principal was impressed and gave us ₹5,000 to build a cardboard prototype. But then everything fell apart. A misunderstanding about a "hacking" trick to get unlimited internet led Sujan''s dad to curse my mom. Rumors spread in school that I had scammed the principal. I was publicly humiliated in front of the entire school in the auditorium. That incident gave me deep mental pain and suicidal thoughts. I learned a harsh lesson: without money, you have no power or respect.', 4),
  ('Shift from Scientist to Entrepreneur', 'That betrayal changed my worldview. I realized that even if I found the cure for cancer, it wouldn''t matter unless I could build a company to distribute it. My mindset shifted from scientist to entrepreneur. When I lost my favorite grandparent during 10th grade, I started exploring philosophy and different religions, trying to understand life''s reality. I discovered the concept of "types of civilization" and made it my mission: I will make Earth a Type 1 civilization before I die. This gave me hope and a reason to keep living.', 5),
  ('YouTube & Finding Dynamic (2023)', 'I got distracted watching YouTube and thought becoming a content creator would help me complete my mission. I grew from 78 to 1,024 subscribers in 11 days. I learned video editing but realized it took too much time, so I decided to hire an editor. I got 22 submissions. I worked with Dynamic, and after some drama with another editor who thought I was offering 50% of my channel, Dynamic and I connected over our shared vision. My grades suffered (55% in 11th, almost F in Maths), but I consider 2023 my prime for personal growth and mindset development.', 6),
  ('Reach Resolve & The Grind (2024)', 'Dynamic and I started freelancing together. On June 5, 2024, we signed our first international client for Reach Resolve, our video editing agency. By December, we made around $1,500 in revenue. I was working 14-16 hours a day on average. I dropped out of college in March because it wasn''t adding value - I had already learned everything from YouTube, AI, and online courses. We tried SMMA for 2 months but found it too saturated. In June 2025, we decided to pivot to AI automation agency.', 7),
  ('Resolvia & The Aha Moment (2024-2025)', 'We started learning AI automation - n8n, cloud infrastructure, how AI agents work. We spent August-September 2024 reaching out to clients. In September, I realized we started the agency to make money for a startup, but we were stuck. We spent 3 weeks brainstorming startup ideas. Then, while washing dishes, I had an "aha moment": What if we build something that helps people find startup ideas, then generates their website, adds marketing agents, and automates their business? That became Cooper - combining my childhood dream of doing meaningful philanthropy with the power of AI to make people self-sufficient, not just temporarily helped.', 8),
  ('The Real Mission', 'Earlier in 2024, when studying philosophy, I struggled with a thought: even if I do philanthropy like Mr. Beast, people will still be poor and helpless the next day. Someone needs to pay for that philanthropy, and they won''t be alive forever. Then I saw Fukra Insaan make and give away businesses within 24 hours or a week. That clicked: what if I create businesses and give them to people who really want the opportunity to become self-sufficient? Cooper makes this possible at scale - giving millions of people the opportunity to become independent. It''s not just philanthropy for the sake of it; it''s making people truly free.', 9)
ON CONFLICT DO NOTHING;

-- Insert team members
INSERT INTO team_members (name, role, bio, order_index, is_active) VALUES
  ('Rohit Bag', 'Founder & CEO', 'Visionary founder obsessed with building products that scale human opportunity. On a mission to push Earth toward Type 1 civilization.', 1, true),
  ('Dynamic', 'Co-Founder & COO', 'Operational mastermind and trusted partner who shares the vision of making meaningful impact through technology and entrepreneurship.', 2, true)
ON CONFLICT DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_life_story_sections_updated_at BEFORE UPDATE ON life_story_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
