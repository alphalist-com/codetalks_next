interface SpeakerResponse {
  id: number;
  name: string;
  surname: string;
  photo_path: string;
  thumbnail_path: string;
  is_admin: number;
  on_contact: number;
  created_at: string;
  updated_at: string;
  full_name: string;
  photo_url: string;
  thumbnail_url: string;
  profile_fields: ProfileFields;
  attendee: Attendee;
}

interface ProfileFields {
  email?: Field;
  name?: Field;
  surname?: Field;
}

interface Field {
  label: string;
}

interface Attendee {
  id: number;
  position: string;
  biography: string;
  xing_profile?: string;
  linkedin_profile?: string;
  twitter_profile?: string;
  youtube_profile?: string;
  github_profile?: string;
  medium_profile?: string;
  blog?: string;
  is_curator: number;
  is_speaker: number;
  user_id: number;
  company_id: number;
  website_id: number;
  gitlab_profile?: string;
  talks: Talk[];
  moderatorTalks: any[];
  profile_fields: ProfileFields;
  social_fields: SocialFields;
  name: string;
  surname: string;
  email?: string;
  photo_url: string;
  thumbnail_url: string;
  full_name: string;
  website?: Website;
  company: Company;
  user: User;
}

interface SocialFields {
  xing_profile?: Field;
  linkedin_profile?: Field;
  twitter_profile?: Field;
  github_profile?: Field;
  youtube_profile?: Field;
  medium_profile?: Field;
  blog?: Field;
}

interface Talk {
  id: number;
  // ... all other properties for a talk
  speakers: Speaker[];
  track: Track;
  programming_languages: ProgrammingLanguage[];
  moderators: any[];
  event: Event;
  // ... any other fields you need
}

interface Speaker {
  id: number;
  // ... all other properties for a speaker
}

interface Track {
  id: number;
  // ... all other properties for a track
}

interface ProgrammingLanguage {
  id: number;
  // ... all other properties for a programming language
}

interface Event {
  id: number;
  // ... all other properties for an event
}

interface Company {
  id: number;
  name: string;
  logo_original_path: string;
  logo_thumbnail_path: string;
  logo_url: string;
  thumbnail_url: string;
}

interface Website {
  id: number;
  url: string;
}

interface User {
  id: number;
  name: string;
  surname: string;
  photo_path: string;
  thumbnail_path: string;
  is_admin: number;
  on_contact: number;
  created_at: string;
  updated_at: string;
  full_name: string;
  photo_url: string;
  thumbnail_url: string;
  profile_fields: ProfileFields;
}
