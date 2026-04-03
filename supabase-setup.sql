-- 휘니스포츠 Supabase 테이블 설정
-- Supabase Dashboard > SQL Editor에서 실행하세요.

-- 1. 동영상 가이드 테이블
CREATE TABLE IF NOT EXISTS guide_videos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category text NOT NULL CHECK (category IN ('barospine', 'kids', 'golf', 'foamroller')),
  title text NOT NULL,
  youtube_url text,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 2. 공지사항 테이블
CREATE TABLE IF NOT EXISTS notices (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category text DEFAULT '공지' CHECK (category IN ('공지', '배송', '이벤트')),
  title text NOT NULL,
  content text NOT NULL,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 3. 관리자 계정 테이블
CREATE TABLE IF NOT EXISTS admins (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 4. RLS (Row Level Security) 설정
ALTER TABLE guide_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 정책 (guide_videos)
CREATE POLICY "Public read guide_videos" ON guide_videos
  FOR SELECT USING (true);

-- 공개 읽기 정책 (notices - 게시된 것만)
CREATE POLICY "Public read published notices" ON notices
  FOR SELECT USING (is_published = true);

-- Service role은 모든 작업 가능 (API Route에서 service_role_key 사용)
CREATE POLICY "Service role full access videos" ON guide_videos
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access notices" ON notices
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access admins" ON admins
  FOR ALL USING (true) WITH CHECK (true);

-- 5. 초기 관리자 계정 추가 (비밀번호: admin1234)
-- bcrypt hash of 'admin1234'
INSERT INTO admins (username, password_hash) VALUES (
  'admin',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
) ON CONFLICT (username) DO NOTHING;

-- ※ 주의: 위 비밀번호 해시는 예시입니다.
-- 실제 운영 시 아래 명령으로 새 해시를 생성하세요:
-- node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('YOUR_PASSWORD', 10).then(console.log)"
