@echo off
echo ========================================
echo Real Estate Project - Local Server
echo ========================================
echo.
echo Starting local web server...
echo.
echo Your website will open automatically at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python 3...
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Try PHP
php --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using PHP...
    start http://localhost:8000
    php -S localhost:8000
    goto :end
)

REM If neither is available
echo.
echo ERROR: No suitable server found!
echo.
echo Please install one of the following:
echo - Python 3 (https://www.python.org/downloads/)
echo - PHP (https://www.php.net/downloads)
echo - Node.js with http-server (https://nodejs.org/)
echo.
echo Or simply open index.html directly in your browser.
echo.
pause
goto :end

:end
