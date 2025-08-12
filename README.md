# Prescripto 🩺

Prescripto is a full-stack doctor appointment booking platform with **user authentication**, **doctor management**, **appointment scheduling**, and **payment integration**. It includes separate **User** and **Admin** panels, enabling smooth healthcare service management.

---

## 🚀 Features

### 👤 User Features
- User registration & authentication (JWT-based)
- Profile management with **Cloudinary** image upload
- Browse and search doctors
- Book and cancel appointments
- Online payments with **Razorpay** & **Stripe**

### 🛠 Admin Features
- Admin authentication
- Add, edit, and remove doctors
- View and manage all appointments
- Manage payments
- Monitor platform activity

---

## 📸 Screenshots

### **Home**
![Home](Home.png)

### **Book Appointment**
![Book Appointment](BookAppointment.png)

### **All Doctors**
![All Doctors](Doctors.png)


## 🛠 Tech Stack

- **Frontend:** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Tailwind CSS](https://tailwindcss.com/), [React.js](https://react.dev/)  
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
- **Database:** [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)  
- **Authentication & Security:** [JWT](https://jwt.io/), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)


## ⚙️ Installation & Setup

Clone the repository and install dependencies for both frontend and backend.

```bash
# Clone the repository
git clone https://github.com/himanshup18/Prescripto.git
cd Prescripto

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
