import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export function Profile() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "shavqiddintilovov0",
    email: "shavqiddintilovov0@gmail.com",
    currentPassword: "••••••••••••",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name and Last Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-base font-medium text-foreground"
          >
            First name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-base font-medium text-foreground"
          >
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white"
            required
          />
        </div>
      </div>

      {/* Display Name */}
      <div className="space-y-2">
        <Label
          htmlFor="displayName"
          className="text-base font-medium text-foreground"
        >
          Display name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="displayName"
          type="text"
          value={formData.displayName}
          onChange={(e) => handleInputChange("displayName", e.target.value)}
          className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white"
          required
        />
        <p className="text-base text-muted-foreground italic">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base font-medium text-foreground">
          Email address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white"
          required
        />
      </div>

      {/* Password Change Section */}
      <div className="space-y-4">
        <h3 className="text-base font-medium text-foreground">Password change</h3>

        {/* Current Password */}
        <div className="space-y-2">
          <Label
            htmlFor="currentPassword"
            className="text-base text-muted-foreground"
          >
            Current password (leave blank to leave unchanged)
          </Label>
          <div className="relative">
            <Input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e) =>
                handleInputChange("currentPassword", e.target.value)
              }
              className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <Label
            htmlFor="newPassword"
            className="text-base text-muted-foreground"
          >
            New password (leave blank to leave unchanged)
          </Label>
          <div className="relative">
            <Input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
              className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-base text-muted-foreground"
          >
            Confirm new password
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              className="bg-stone-100 rounded-none py-6 px-2 border-stone-200 focus:bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <Button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full"
        >
          Save changes
        </Button>
      </div>
    </form>
  );
}
