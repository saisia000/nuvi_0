import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SourcesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SourcesModal = ({ open, onOpenChange }: SourcesModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-caveat text-2xl text-primary">
            Research & Sources
          </DialogTitle>
          <DialogDescription className="text-base">
            Our caregiver burden data comes from peer-reviewed research and national surveys
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4 font-patrick text-base">
          <div>
            <h4 className="font-semibold text-primary mb-2">Primary Sources:</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Caregiving in the U.S. 2020</strong> - National Alliance for Caregiving & AARP</li>
              <li>• <strong>The Zarit Burden Interview</strong> - Journal of Gerontology (2014)</li>
              <li>• <strong>Family Caregiver Health Impact</strong> - JAMA Internal Medicine (2020)</li>
              <li>• <strong>Economic Value of Family Caregiving</strong> - Public Policy Institute, AARP (2019)</li>
              <li>• <strong>Caregiver Stress and Mental Health</strong> - American Journal of Geriatric Psychiatry (2018)</li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-accent/20">
            <p className="text-sm text-muted-foreground">
              Data represents aggregated findings from multiple studies of family caregivers 
              in the United States, with sample sizes ranging from 1,000 to 50,000+ participants.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SourcesModal;