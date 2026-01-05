"""
Test script to verify Gemini API key and connection
"""
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Get API key
api_key = os.getenv('GEMINI_API_KEY')

print("=" * 60)
print("🔑 Gemini API Key Test")
print("=" * 60)

# Check if API key exists
if not api_key:
    print("❌ ERROR: GEMINI_API_KEY not found in .env file")
    exit(1)

if api_key == 'your_gemini_api_key_here':
    print("❌ ERROR: API key is still the placeholder value")
    exit(1)

print(f"✅ API Key found: {api_key[:20]}...")

# Configure Gemini
try:
    genai.configure(api_key=api_key)
    print("✅ Gemini API configured successfully")
except Exception as e:
    print(f"❌ ERROR configuring Gemini: {e}")
    exit(1)

# Test with a simple prompt
print("\n" + "=" * 60)
print("🧪 Testing Gemini API with simple prompt...")
print("=" * 60)

try:
    # Try different model names
    models_to_try = [
        "gemini-2.0-flash-exp",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-pro"
    ]
    
    for model_name in models_to_try:
        print(f"\n📝 Trying model: {model_name}")
        try:
            model = genai.GenerativeModel(model_name)
            response = model.generate_content("Say hello in one word")
            print(f"✅ SUCCESS with {model_name}")
            print(f"Response: {response.text}")
            print(f"\n🎉 Working model found: {model_name}")
            break
        except Exception as e:
            print(f"❌ FAILED with {model_name}: {str(e)[:100]}")
            continue
    else:
        print("\n❌ All models failed. Check your API key permissions.")
        
except Exception as e:
    print(f"❌ ERROR: {e}")
    import traceback
    traceback.print_exc()

print("\n" + "=" * 60)
print("Test Complete")
print("=" * 60)
