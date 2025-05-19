import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://pavggqgxoxagdrrbmqvj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdmdncWd4b3hhZ2RycmJtcXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTI0OTEsImV4cCI6MjA2MDg2ODQ5MX0.Jfmk_Q4Rjr_hd_53mh5lZmmGGxwT-Fc_imdL5hZNfTw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
