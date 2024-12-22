/*
  # Initial Schema for Event Management System

  1. New Tables
    - users
      - Custom user data and profile information
    - events
      - Event details including title, description, date, etc.
    - tickets
      - Ticket information for events
    - bookings
      - User event bookings

  2. Security
    - RLS enabled on all tables
    - Policies for user access control
*/

-- Users table for additional user data
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text,
  is_admin boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  date timestamptz NOT NULL,
  location text NOT NULL,
  price decimal(10,2) NOT NULL,
  capacity integer NOT NULL,
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tickets table
CREATE TABLE IF NOT EXISTS tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id),
  ticket_type text NOT NULL,
  price decimal(10,2) NOT NULL,
  quantity integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  event_id uuid REFERENCES events(id),
  ticket_id uuid REFERENCES tickets(id),
  quantity integer NOT NULL,
  total_price decimal(10,2) NOT NULL,
  booking_date timestamptz DEFAULT now(),
  status text DEFAULT 'confirmed'
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE TO authenticated
  USING (auth.uid() = id);

-- Events policies
CREATE POLICY "Anyone can view events" ON events
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Admins can manage events" ON events
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.is_admin = true
    )
  );

-- Tickets policies
CREATE POLICY "Anyone can view tickets" ON tickets
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Admins can manage tickets" ON tickets
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.is_admin = true
    )
  );

-- Bookings policies
CREATE POLICY "Users can view own bookings" ON bookings
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create bookings" ON bookings
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());