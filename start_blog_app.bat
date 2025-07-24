@echo off
echo Starting Blog Application...
echo.

echo Checking if MySQL is running...
tasklist /FI "IMAGENAME eq mysqld.exe" 2>NUL | find /I /N "mysqld.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo MySQL is running ✓
) else (
    echo MySQL is not running! Please start MySQL server first.
    echo You can start it from XAMPP Control Panel or Services
    pause
    exit /b 1
)

echo.
echo Starting Backend (Spring Boot)...
cd /d "o:\blog_apps\blog_app\blog_app"
start "Backend Server" cmd /k "mvn spring-boot:run"

echo Waiting for backend to start...
timeout /t 15 /nobreak >nul

echo.
echo Starting Frontend (React)...
cd /d "o:\blog_apps\blog-app-main"
start "Frontend Server" cmd /k "npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:8085
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause >nul