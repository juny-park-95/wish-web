#!/bin/bash

echo "🚀 위시 홈페이지 배포 시작..."

# 1. Git 상태 확인 및 정리
echo "📝 Git 상태 정리 중..."
git status

# 2. package-lock.json 백업 (있다면)
if [ -f "package-lock.json" ]; then
    echo "💾 package-lock.json 백업 중..."
    cp package-lock.json package-lock.json.backup
fi

# 3. Git stash (변경사항이 있다면)
if ! git diff-index --quiet HEAD --; then
    echo "📦 변경사항 임시 저장 중..."
    git stash push -m "배포 전 자동 백업 $(date)"
fi

# 4. 최신 코드 가져오기
echo "⬇️ 최신 코드 가져오는 중..."
git pull origin main

# 5. package-lock.json 처리
if [ -f "package-lock.json.backup" ]; then
    echo "🔄 package-lock.json 복원 확인 중..."
    # 백업과 현재 파일이 다르면 npm install 실행
    if ! cmp -s "package-lock.json" "package-lock.json.backup"; then
        echo "📦 패키지 변경사항 감지, 설치 중..."
        npm ci --production
    else
        echo "✅ 패키지 변경사항 없음"
    fi
    rm package-lock.json.backup
else
    echo "📦 패키지 설치 중..."
    npm ci --production
fi

# 6. 빌드
echo "🔨 프로젝트 빌드 중..."
npm run build

# 7. 완료
echo "✅ 배포 완료!"
echo "🌐 웹사이트가 업데이트되었습니다." 