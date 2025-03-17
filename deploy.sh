REPOSITORY=/home/ubuntu/deploy

# 저장소 디렉토리 존재 여부 확인
if [ ! -d "$REPOSITORY" ]; then
  echo "Error: Directory $REPOSITORY does not exist."
  exit 1
fi

# 디렉토리로 이동
cd $REPOSITORY

# npm 의존성 설치
echo "Installing npm dependencies..."
sudo npm install
if [ $? -ne 0 ]; then
  echo "Error: npm install failed."
  exit 1
fi

# PM2로 모든 애플리케이션 재시작
echo "Reloading all applications with PM2..."
sudo pm2 reload all
if [ $? -ne 0 ]; then
  echo "Error: PM2 reload failed."
  exit 1
fi

echo "Deployment script completed successfully."