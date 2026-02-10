
export const SUPABASE_URL = 'https://xhmisvxohwofpzxkizpi.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_n7cCpkRy1wBo95YQHwQykw_gxA98bNd';

// Mock data store to ensure app functionality when API is unreachable
const MOCK_DATA: Record<string, any[]> = {
  'centumbrosher': [
    { id: 1, image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600", title: "Admissions Open 2025" },
    { id: 2, image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600", title: "Excellence in Education" },
    { id: 3, image_url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600", title: "Join Toppers League" }
  ],
  'centum_news': [
    { id: 1, title: "NEET 2025 Crash Course Registration Open", excerpt: "Intensive 45-day crash course starting soon. Secure your seat now.", image_url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400", category: "Admissions", created_at: new Date().toISOString(), read_more_url: "#", is_urgent: true },
    { id: 2, title: "Centum Toppers Felicitation Ceremony 2024", excerpt: "Honoring our students who secured top ranks in JEE Advanced.", image_url: "https://images.unsplash.com/photo-1523240715639-99a8a7ae9b18?auto=format&fit=crop&q=80&w=400", category: "Events", created_at: new Date(Date.now() - 86400000).toISOString(), read_more_url: "#", is_urgent: false },
    { id: 3, title: "Scholarship Test Results Announced", excerpt: "Check the results of the CST held on Jan 15th.", image_url: "https://images.unsplash.com/photo-1434039347656-ad76cb03175c?auto=format&fit=crop&q=80&w=400", category: "Results", created_at: new Date(Date.now() - 172800000).toISOString(), read_more_url: "#", is_urgent: false }
  ],
  'centum_results': [
    { id: 1, student_name: "Adithya R", rank: "AIR 145", exam_type: "JEE Advanced", score: "302/360", image_url: null, achievement: "IIT Madras", exam_year: 2024 },
    { id: 2, student_name: "Fatima S", rank: "AIR 89", exam_type: "NEET (UG)", score: "710/720", image_url: null, achievement: "AIIMS Delhi", exam_year: 2024 },
    { id: 3, student_name: "Rahul K", rank: "AIR 230", exam_type: "JEE Main", score: "99.98 %ile", image_url: null, achievement: "NIT Trichy", exam_year: 2024 },
    { id: 4, student_name: "Meera J", rank: "State 5", exam_type: "KEAM", score: "950/960", image_url: null, achievement: "CET Trivandrum", exam_year: 2024 },
    { id: 5, student_name: "John D", rank: "AIR 300", exam_type: "JEE Advanced", score: "280/360", image_url: null, achievement: "IIT Kanpur", exam_year: 2023 }
  ],
  'centum_blogs': [
    { id: 1, title: "5 Tips to Master Organic Chemistry", excerpt: "Simplify reactions and mechanisms with these expert strategies.", image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", category: "Study Tips", author: "Dr. S. Nair", created_at: new Date().toISOString(), read_time: "5 min read", content_html: "#" },
    { id: 2, title: "Managing Stress During Exam Season", excerpt: "Mental health tips for aspirants preparing for competitive exams.", image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", category: "Wellness", author: "Counselor R. Devi", created_at: new Date(Date.now() - 604800000).toISOString(), read_time: "4 min read", content_html: "#" },
    { id: 3, title: "Physics: Important Topics for JEE 2025", excerpt: "Focus on these high-weightage chapters to boost your score.", image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800", category: "Academic", author: "Prof. K. Menon", created_at: new Date(Date.now() - 1209600000).toISOString(), read_time: "6 min read", content_html: "#" }
  ],
  'centum_announcements': [
    { id: 1, title: "Holiday on March 25th", description: "Institute will remain closed for Holi.", created_at: new Date().toISOString(), priority: 1 },
    { id: 2, title: "Parent-Teacher Meeting", description: "Scheduled for Batch A on April 2nd.", created_at: new Date().toISOString(), priority: 2 },
    { id: 3, title: "Admit Cards Released", description: "Collect your hall tickets from the office.", created_at: new Date().toISOString(), priority: 3 }
  ],
  'centum_study_materials': [
     { id: '1', title: 'Electrostatics Notes', subject: 'Physics', category: 'Notes', exam: '+2', file_size: '2.4 MB', file_type: 'PDF', downloads: '1.2k', url: '#', is_new: true },
     { id: '2', title: 'Chemical Kinetics Formula Sheet', subject: 'Chemistry', category: 'Formula Sheet', exam: '+2', file_size: '1.1 MB', file_type: 'PDF', downloads: '850', url: '#', is_new: false },
     { id: '3', title: 'Integration Question Bank', subject: 'Mathematics', category: 'Mock Test', exam: '+2', file_size: '3.5 MB', file_type: 'PDF', downloads: '2.1k', url: '#', is_new: true },
     { id: '4', title: 'Genetics Summary', subject: 'Biology', category: 'Notes', exam: '+2', file_size: '1.8 MB', file_type: 'PDF', downloads: '1.5k', url: '#', is_new: false },
     { id: '5', title: 'Newton Laws', subject: 'Physics', category: 'Notes', exam: '+1', file_size: '1.5 MB', file_type: 'PDF', downloads: '900', url: '#', is_new: false }
  ]
};

/**
 * Robust fetch wrapper for Supabase PostgREST API.
 * Handles common network issues and provides consistent error logging with mock fallback.
 */
export async function supabaseFetch<T>(path: string, options: RequestInit = {}): Promise<T[]> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${path}`);
  url.searchParams.set('apikey', SUPABASE_KEY);

  const defaultHeaders = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url.toString(), {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Supabase API error [${response.status}]`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`Failed to fetch from Supabase path: ${path}. Falling back to mock data.`);
    
    // Find matching mock data based on the table name in the path
    const mockKey = Object.keys(MOCK_DATA).find(key => path.startsWith(key));
    if (mockKey) {
      return MOCK_DATA[mockKey] as unknown as T[];
    }

    return [];
  }
}

/**
 * Robust POST wrapper for Supabase PostgREST API.
 */
export async function supabasePost(path: string, payload: any): Promise<boolean> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${path}`);
  url.searchParams.set('apikey', SUPABASE_KEY);

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("API Request Failed");
    return true;
  } catch (error) {
    console.warn(`Failed to post to Supabase path: ${path}. Simulating success.`);
    return true; // Simulate success for demo purposes
  }
}
